# Blog Tokens Project - Product Requirements Document

## 1. Project Overview

### Goals and Objectives

- Create a minimalist blog implementation using design tokens for styling
- Maintain a lean tech stack with HTML and CSS only (no JavaScript)
- Establish a streamlined workflow from Figma design to production code
- Automate the token transformation process using GitHub Actions
- Demonstrate design system principles with minimal technical overhead

### Key Features

- Pure HTML and CSS implementation (zero JavaScript)
- Design tokens integration via Tokens Studio for Figma
- Automated token processing pipeline
- Consistent typography and color systems
- CSS variable-based styling

### Core Philosophy

This project embraces simplicity and efficiency by using only HTML and CSS. The design token system provides design consistency without adding complexity or performance overhead. By avoiding frameworks, build tools (beyond token processing), and JavaScript, we create a lean codebase that's easy to maintain and performs optimally.

## 2. Technical Stack

### Lean Implementation

- **HTML**: Semantic markup only
- **CSS**: Modern CSS with variables (custom properties)
- **No JavaScript**: Zero client-side scripting

### Design Tools

- **Figma**: Primary design tool
- **Tokens Studio for Figma**: Plugin for managing design tokens
- **GitHub**: Version control and automation

### Token Processing

- **Style Dictionary**: Transform tokens from Figma format to CSS variables
- **GitHub Actions**: Automate the token transformation process
- **CSS Variables**: Implementation method for using tokens in code

## 3. Design Tokens Implementation

### Token Structure

- **Colors**: Primary, secondary, background, and text colors
- **Typography**: Text styles for different sizes (large, medium, small)
- **Spacing/Sizing**: Basic spacing and sizing values

### Figma to GitHub Workflow

1. Designer updates tokens in Figma using Tokens Studio plugin
2. Tokens are pushed directly from Figma to GitHub repository
3. GitHub Actions detects changes in token files
4. Style Dictionary processes tokens into CSS variables
5. Updated CSS is committed back to the repository

### Token Naming Preservation (CRITICAL)

- **NEVER MODIFY TOKEN NAMING**: Always preserve the exact token naming structure that comes from Figma + Tokens Studio
- **Single Source of Truth**: Figma + Tokens Studio is the only authority on token naming and structure
- **Style Dictionary Configuration**: Must be set up to respect original token naming without transformation
- **Version Compatibility**: Ensure dependencies are compatible with the W3C DTCG format used by Tokens Studio

### Token Processing Details

- Style Dictionary transforms the Tokens Studio JSON format
- Tokens are compiled into a single CSS variables file
- Variables are scoped to the `:root` selector
- Original token references and structure must be preserved through the transformation
- Token processing must use the official `@tokens-studio/sd-transforms` package

### CSS Variable Usage

- CSS variables are imported into the main stylesheet
- Variables are referenced using `var(--token-name)` syntax
- Fallback values are provided where appropriate

## 4. Development Workflow

### Designer Workflow

1. Update designs in Figma
2. Modify tokens in Tokens Studio plugin
3. Push token changes directly to GitHub

### Developer Workflow

1. Pull latest changes from GitHub
2. Use pre-processed CSS variables in stylesheets
3. Test implementation against designs
4. Commit code changes to GitHub

### Automation with GitHub Actions

- **Trigger**: Changes to files in the tokens directory
- **Process**: Run npm script to build tokens
- **Output**: Updated CSS variables file
- **Commit**: Automated commit with updated CSS

## 5. Common Issues and Solutions

### Known Errors

#### Tokens Studio GitHub Sync Issues

- **Error**: Tokens Studio unable to push to GitHub
- **Solution**: Verify GitHub access token has correct permissions and hasn't expired
- **Prevention**: Regularly rotate GitHub tokens and check sync settings

#### Style Dictionary Transformation Errors

- **Error**: Malformed token JSON causing build failures
- **Solution**: Validate token JSON format before pushing
- **Prevention**: Use Tokens Studio's validation features

#### GitHub Actions Workflow Failures

- **Error**: Process-tokens workflow failing
- **Solution**: Check workflow logs for specific errors
- **Prevention**: Test token changes locally before pushing

#### Style Dictionary Version Compatibility Issues

- **Error**: Incompatibility between Style Dictionary and Tokens Studio transforms package
- **Solution**: Use compatible versions (Style Dictionary v4.3.x with @tokens-studio/sd-transforms v2.x)
- **Prevention**: Lock dependency versions in package.json and test locally before deployment

#### Token Reference Resolution Failures

- **Error**: Token references not being properly resolved ({token.reference} remains in output)
- **Solution**: Enable outputReferences in Style Dictionary configuration
- **Prevention**: Use proper configuration and test token resolution locally

### Avoiding Bloat in Token Processing

#### Minimalist Token Structure

- Use flat token hierarchies where possible
- Avoid unnecessary nesting in JSON files
- Keep token sets focused and well-organized

#### Efficient Transformation Process

- Use targeted Style Dictionary configurations
- Process only what's needed (no excess transformations)
- Minimize dependencies in the build process

#### Clean Output

- Generate only the CSS variables actually used in the project
- Avoid duplicate or redundant variable definitions
- Keep the variables.css file compact and readable

#### Optimized GitHub Actions Workflow

- Trigger builds only when token files change
- Streamlined build process with minimal steps
- Fast execution without unnecessary tasks

#### Maintenance Considerations

- Regular cleanup of unused tokens
- Consolidate similar tokens to avoid duplication
- Follow naming conventions consistently

### Best Practices

- Maintain a single source of truth for tokens (Figma)
- Use descriptive token names that communicate intent
- Document the token system for team reference
- Test token changes visually before finalizing

### Technical Learnings

#### Style Dictionary 4.x Migration

- Updated from Style Dictionary 3.x to 4.x requires ES Modules format
- Package should be imported as `import StyleDictionary from "style-dictionary"`
- Configuration file must use export default pattern
- Node.js 18+ required for compatibility

#### Tokens Studio Integration

- Use `@tokens-studio/sd-transforms` package v2.x for W3C DTCG format compatibility
- The package must be registered with Style Dictionary before use
- Avoid name transformations to preserve original token structure
- Use the `tokens-studio` transformGroup for proper token processing

## 6. Future Improvements

### Potential Enhancements

- Add basic token documentation site
- Implement theme switching capability (light/dark mode)
- Create simple component examples using the tokens
- Add visual regression testing

### Scaling Considerations

- Structure tokens for multi-brand support
- Establish token versioning strategy
- Create component-specific token subsets

### Guidelines for Maintaining Minimalism

- Question every new dependency before adding
- Prioritize browser-native solutions over libraries
- Regularly audit and remove unused tokens and styles
- Keep the build process as simple as possible
- Avoid feature creep by referring back to core objectives
