import { readFileSync } from 'node:fs';
import StyleDictionary from 'style-dictionary';
import { register, permutateThemes } from '@tokens-studio/sd-transforms';

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
register(StyleDictionary, { 
  excludeParentKeys: true
});

const $themes = JSON.parse(readFileSync('./tokens/$themes.json', 'utf-8'));
const themes = permutateThemes($themes, { seperator: '_' });
const configs = Object.entries(themes).map(([name, tokensets]) => ({
  log: {
    verbosity: 'verbose',
  },
  source: tokensets.map((tokenset) => `./tokens/${tokenset}.json`),
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'src/css/',
      files: [
        {
          destination: `_variables-${name}.css`,
          format: 'css/variables',
        },
      ],
      "expand": true
    },
  },
}));

for (const cfg of configs) {
  const sd = new StyleDictionary(cfg);
  // optionally, cleanup files first..
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}
