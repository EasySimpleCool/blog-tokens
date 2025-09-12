import StyleDictionary from 'style-dictionary';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { register } from '@tokens-studio/sd-transforms';

// Register Tokens Studio transforms (enables color modifiers, etc.)
register(StyleDictionary);

// Helpers
function sanitizeParts(parts) {
  return parts
    .filter((raw) => {
      const part = String(raw).toLowerCase();
      if (!part) return false;
      if (part.startsWith('$')) return false;
      if (part === 'modify') return false;
      if (part.includes('extensions')) return false;
      if (part.includes('studio')) return false; // covers "studio.tokens"
      if (part.includes('tokens')) return false; // covers "studio.tokens"
      return true;
    })
    .map((part) => String(part).replace(/[^a-zA-Z0-9-_]/g, '-'));
}

function makeCssVarNameFromToken(token) {
  // token.path like ['modify','accent','color','hover']
  const parts = sanitizeParts(token.path.slice(1));
  const name = `--${parts.join('-')}`.replace(/-+/g, '-').replace(/^--+/, '--');
  return name;
}

function isModifyToken(token, group) {
  if (!Array.isArray(token.path)) return false;
  const lower = token.path.map((p) => String(p).toLowerCase());
  const hasMeta = lower.some(
    (p) => p.startsWith('$') || p.includes('extensions') || p.includes('studio') || p.includes('tokens')
  );
  return token.path[0] === 'modify' && token.path[1] === group && !hasMeta;
}

function baseFileName(filePath) {
  const match = String(filePath).split(/[\/\\]/).pop() || '';
  return match.replace(/\.json$/i, '');
}

function sanitizeModeName(name) {
  // strip leading symbols like '↳ ', keep alnum/_/-
  return String(name).replace(/^[^\w-]+/, '').replace(/[^\w-]/g, '-').toLowerCase();
}

function extractModeFromFile(filePath) {
  return sanitizeModeName(baseFileName(filePath));
}

function isDirMatch(filePath, dirName) {
  // check any path segment contains the dirName substring (case-insensitive)
  const segs = String(filePath).toLowerCase().split(/[\/\\]/);
  return segs.some(s => s.includes(dirName.toLowerCase()));
}

function discoverModes(allTokens, group, dirName) {
  const modes = new Set();
  allTokens.forEach(t => {
    if (!t.filePath) return;
    if (!isDirMatch(t.filePath, dirName)) return;
    modes.add(extractModeFromFile(t.filePath));
  });
  return Array.from(modes);
}

function tokensForGroupMode(allTokens, group, mode) {
  const target = sanitizeModeName(mode);
  return allTokens.filter(t => {
    if (!t || !t.filePath) return false;
    if (!isDirMatch(t.filePath, group)) return false;
    const lowerPath = Array.isArray(t.path) ? t.path.map(p => String(p).toLowerCase()) : [];
    const hasMeta = lowerPath.some(p => p.startsWith('$') || p.includes('extensions') || p.includes('studio') || p.includes('tokens'));
    if (hasMeta) return false;
    const m = extractModeFromFile(t.filePath);
    return m === target;
  });
}

// Parametric data-attributes format
StyleDictionary.registerFormat({
  name: 'css/parametric-data-attributes',
  format: function ({ dictionary }) {
    const { allTokens } = dictionary;

    // Filesystem helpers to avoid merge collisions across modes
    const TOKENS_DIR = 'tokens';
    function findGroupDir(label) {
      const entries = readdirSync(TOKENS_DIR, { withFileTypes: true });
      const match = entries.find(e => e.isDirectory() && e.name.toLowerCase().includes(label.toLowerCase()));
      return match ? join(TOKENS_DIR, match.name) : null;
    }

    function listModeFiles(label) {
      const dir = findGroupDir(label);
      if (!dir) return [];
      const files = readdirSync(dir).filter(f => f.toLowerCase().endsWith('.json') && !f.startsWith('$'));
      return files.map(f => join(dir, f));
    }

    function getInputFile() {
      // Find the Input.json file (emoji-prefixed)
      const files = readdirSync(TOKENS_DIR).filter(f => f.toLowerCase().includes('input') && f.toLowerCase().endsWith('.json'));
      if (files.length > 0) return join(TOKENS_DIR, files[0]);
      return join(TOKENS_DIR, '🔵 Input.json');
    }

    function getTransformedTokensForSources(sources) {
      const sdAlt = new StyleDictionary({
        source: sources,
        platforms: {
          tmp: {
            transformGroup: 'tokens-studio',
            files: []
          }
        }
      });
      const platform = sdAlt.getPlatform('tmp');
      return platform && platform.dictionary ? platform.dictionary.allTokens : [];
    }

    function buildCssForGroup(groupKey, groupLabel, dataAttr) {
      let css = '';
      const modeFiles = listModeFiles(groupLabel);
      const modeNames = modeFiles.map(f => sanitizeModeName(baseFileName(f)));
      css += `/* debug ${groupLabel.toLowerCase()} modes (fs): ${modeNames.join(', ')} */\n`;
      modeFiles.forEach(modeFile => {
        const modeName = sanitizeModeName(baseFileName(modeFile));
        const seen = new Set();
        css += `[data-${dataAttr}="${modeName}"] {\n`;
        dictionary.allTokens
          .filter(t => Array.isArray(t.path) && t.path[0] === 'modify' && t.path[1] === groupKey)
          .filter(t => typeof t.filePath === 'string' && String(t.filePath).endsWith(modeFile))
          .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
          .forEach(token => {
            const varName = makeCssVarNameFromToken(token);
            if (seen.has(varName)) return;
            seen.add(varName);
            css += `  ${varName}: ${token.value};\n`;
          });
        css += '}\n\n';
      });
      return css;
    }

    let css = '/* Generated Parametric Styles from Tokens Studio */\n';
    css += '/* Based on your modify.* token structure */\n\n';

    // === ACCENT ===
    css += '/* === ACCENT SWITCHING === */\n';
    css += '/* Global accent mode - affects entire design system */\n\n';
    css += buildCssForGroup('accent', 'Accent', 'accent');

    // === DISPLAY MODE ===
    css += '/* === DISPLAY MODE SWITCHING === */\n';
    css += '/* Light/Dark theme switching */\n\n';
    css += buildCssForGroup('displaymode', 'Display', 'display');

    // === SIZE ===
    css += '/* === SIZE SWITCHING === */\n';
    css += '/* Component size variants */\n\n';
    css += buildCssForGroup('size', 'Size', 'size');

    // === EMPHASIS ===
    css += '/* === EMPHASIS SWITCHING === */\n';
    css += '/* Component emphasis levels */\n\n';
    css += buildCssForGroup('emphasis', 'Emphasis', 'emphasis');

    // === STATUS ===
    css += '/* === STATUS SWITCHING === */\n';
    css += '/* Component status states */\n\n';
    css += buildCssForGroup('status', 'Status', 'status');

    // === INTERACTION ===
    css += '/* === INTERACTION STATES === */\n';
    css += '/* Hover, pressed, focus states */\n\n';
    const interactionFiles = listModeFiles('Interaction');
    const defaultFile = interactionFiles.find(f => sanitizeModeName(baseFileName(f)) === 'default');
    if (defaultFile) {
      const seen = new Set();
      css += `:root {\n`;
      dictionary.allTokens
        .filter(t => Array.isArray(t.path) && t.path[0] === 'modify' && t.path[1] === 'interaction')
        .filter(t => typeof t.filePath === 'string' && String(t.filePath).endsWith(defaultFile))
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
        .forEach(token => {
          const varName = makeCssVarNameFromToken(token);
          if (seen.has(varName)) return;
          seen.add(varName);
          css += `  ${varName}: ${token.value};\n`;
        });
      css += '}\n\n';
    }
    interactionFiles
      .filter(f => sanitizeModeName(baseFileName(f)) !== 'default')
      .forEach(modeFile => {
        const modeName = sanitizeModeName(baseFileName(modeFile));
        const seen = new Set();
        css += `[data-interaction="${modeName}"], .interaction-${modeName} {\n`;
        dictionary.allTokens
          .filter(t => Array.isArray(t.path) && t.path[0] === 'modify' && t.path[1] === 'interaction')
          .filter(t => typeof t.filePath === 'string' && String(t.filePath).endsWith(modeFile))
          .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
          .forEach(token => {
            const varName = makeCssVarNameFromToken(token);
            if (seen.has(varName)) return;
            seen.add(varName);
            css += `  ${varName}: ${token.value};\n`;
          });
        css += '}\n\n';
      });

    return css;
  },
});

// Component styles format
StyleDictionary.registerFormat({
  name: 'css/component-styles',
  format: function ({ dictionary }) {
    let css = '/* Generated Component Styles */\n';
    css += '/* Components that use parametric variables */\n\n';
    css += '/* === BUTTON COMPONENT === */\n';
    css += '.btn, button {\n';
    css += '  display: inline-flex;\n';
    css += '  align-items: center;\n';
    css += '  justify-content: center;\n';
    css += '  border: none;\n';
    css += '  cursor: pointer;\n';
    css += '  font-family: inherit;\n';
    css += '  transition: all 150ms ease-out;\n';
    css += '  outline: none;\n';
    css += '  text-decoration: none;\n\n';
    css += '  background-color: var(--emphasis-interaction-surface-fill);\n';
    css += '  color: var(--emphasis-interaction-content-fill);\n';
    css += '  border: var(--interaction-state-stroke-width) solid var(--emphasis-interaction-stroke-color);\n';
    css += '  padding: var(--button-size-pad);\n';
    css += '  border-radius: var(--button-size-b-rad);\n';
    css += '  gap: var(--button-size-gap);\n';
    css += '  opacity: var(--status-opacity);\n';
    css += '}\n\n';
    css += '.btn:hover, button:hover {\n';
    css += '  background-color: var(--accent-color-hover);\n';
    css += '  transform: translateY(-1px);\n';
    css += '}\n\n';
    css += '.btn:active, button:active {\n';
    css += '  background-color: var(--accent-color-pressed);\n';
    css += '  transform: translateY(0);\n';
    css += '}\n\n';
    css += '.btn:focus, button:focus {\n';
    css += '  border-radius: var(--button-size-focus-b-rad);\n';
    css += '  box-shadow: 0 0 0 2px var(--interaction-color-accent-focus);\n';
    css += '}\n\n';
    return css;
  },
});

export default {
  source: ['tokens/*Input.json'],
  platforms: {
    css_parametric: {
      buildPath: 'src/css/',
      files: [
        { destination: 'parametric-modes.css', format: 'css/parametric-data-attributes' },
        { destination: 'button.css', format: 'css/component-styles' },
      ],
    },
  },
};