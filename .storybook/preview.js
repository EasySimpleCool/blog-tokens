// Import your actual CSS files
import '../src/css/main.css';

// Import all theme variations so they're available in the bundle
import '../src/css/_var-inp-blu-lig-des-out-comp.css';
import '../src/css/_var-inp-blu-dar-des-out-comp.css';
import '../src/css/_var-inp-pur-lig-des-out-comp.css';
import '../src/css/_var-inp-pur-dar-des-out-comp.css';
import '../src/css/_var-inp-yel-lig-des-out-comp.css';
import '../src/css/_var-inp-yel-dar-des-out-comp.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true, // Disable since you have your own theme system
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '812px' },
        },
        tablet: {
          name: 'Tablet', 
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1200px', height: '800px' },
        },
      },
    },
  },
  
  // Add theme and color controls to toolbar
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    color: {
      description: 'Color scheme for components',
      defaultValue: 'blue',
      toolbar: {
        title: 'Color',
        icon: 'circlehollow',
        items: [
          { value: 'blue', title: 'Blue' },
          { value: 'purple', title: 'Purple' },
          { value: 'yellow', title: 'Yellow' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

// Create CSS to manage theme switching using your exact CSS variables
const createThemeSwitchingCSS = () => {
  const style = document.createElement('style');
  style.id = 'theme-switching-variables';
  style.textContent = `
    /* Theme switching CSS using your exact design tokens */
    
    /* Blue Light Theme */
    body.theme-light.color-blue {
      --output-color-accent-primary: #0a91cc;
      --output-color-accent-lighter: lch(60.503 39.031 247.68);
      --output-color-accent-on-accent: lch(97.832 1.2964 259.09);
      --output-color-fg-primary: lch(23.852 5.8071 258.98);
      --output-color-fg-secondary: #545f6d;
      --comp-section-bg-default: lch(93.495 3.8893 259.09);
      --comp-button-primary-bg-default: #0a91cc;
      --comp-button-primary-bg-hover: lch(60.503 39.031 247.68);
      --comp-button-primary-fg: lch(97.832 1.2964 259.09);
      --comp-tag-bg: lch(97.832 1.2964 259.09);
      --comp-post-detail-bg-default: lch(97.832 1.2964 259.09);
      --comp-post-preview-bg-default: lch(96.748 1.9446 259.09);
      --output-color-border-default: rgb(20.207% 22.543% 25.571% / 0.1);
    }
    
    /* Blue Dark Theme */
    body.theme-dark.color-blue {
      --output-color-accent-primary: #0a91cc;
      --output-color-accent-lighter: lch(60.503 39.031 247.68);
      --output-color-accent-on-accent: lch(97.832 1.2964 259.09);
      --output-color-fg-primary: lch(97.832 1.2964 259.09);
      --output-color-fg-secondary: lch(93.495 3.8893 259.09);
      --comp-section-bg-default: lch(23.852 5.8071 258.98);
      --comp-button-primary-bg-default: #0a91cc;
      --comp-button-primary-bg-hover: lch(60.503 39.031 247.68);
      --comp-button-primary-fg: lch(97.832 1.2964 259.09);
      --comp-tag-bg: #545f6d;
      --comp-post-detail-bg-default: #545f6d;
      --comp-post-preview-bg-default: lch(35.778 8.7106 258.98);
      --output-color-border-default: rgb(91.036% 92.907% 95.522% / 0.1);
    }
    
    /* Purple Light Theme */
    body.theme-light.color-purple {
      --output-color-accent-primary: #965cda;
      --output-color-accent-lighter: lch(55.31 63.927 307.21);
      --output-color-accent-on-accent: lch(97.832 1.2964 259.09);
      --output-color-fg-primary: lch(23.852 5.8071 258.98);
      --output-color-fg-secondary: #545f6d;
      --comp-section-bg-default: lch(93.495 3.8893 259.09);
      --comp-button-primary-bg-default: #965cda;
      --comp-button-primary-bg-hover: lch(55.31 63.927 307.21);
      --comp-button-primary-fg: lch(97.832 1.2964 259.09);
      --comp-tag-bg: lch(97.832 1.2964 259.09);
      --comp-post-detail-bg-default: lch(97.832 1.2964 259.09);
      --comp-post-preview-bg-default: lch(96.748 1.9446 259.09);
      --output-color-border-default: rgb(20.207% 22.543% 25.571% / 0.1);
    }
    
    /* Purple Dark Theme */
    body.theme-dark.color-purple {
      --output-color-accent-primary: #965cda;
      --output-color-accent-lighter: lch(55.31 63.927 307.21);
      --output-color-accent-on-accent: lch(97.832 1.2964 259.09);
      --output-color-fg-primary: lch(97.832 1.2964 259.09);
      --output-color-fg-secondary: lch(93.495 3.8893 259.09);
      --comp-section-bg-default: lch(23.852 5.8071 258.98);
      --comp-button-primary-bg-default: #965cda;
      --comp-button-primary-bg-hover: lch(55.31 63.927 307.21);
      --comp-button-primary-fg: lch(97.832 1.2964 259.09);
      --comp-tag-bg: #545f6d;
      --comp-post-detail-bg-default: #545f6d;
      --comp-post-preview-bg-default: lch(35.778 8.7106 258.98);
      --output-color-border-default: rgb(91.036% 92.907% 95.522% / 0.1);
    }
    
    /* Yellow Light Theme */
    body.theme-light.color-yellow {
      --output-color-accent-primary: #ffbb38;
      --output-color-accent-lighter: #ffe3b2;
      --output-color-accent-on-accent: lch(45.009 57.323 62.765);
      --output-color-fg-primary: lch(23.852 5.8071 258.98);
      --output-color-fg-secondary: #545f6d;
      --comp-section-bg-default: lch(93.495 3.8893 259.09);
      --comp-button-primary-bg-default: #ffbb38;
      --comp-button-primary-bg-hover: #ffe3b2;
      --comp-button-primary-fg: lch(45.009 57.323 62.765);
      --comp-tag-bg: lch(97.832 1.2964 259.09);
      --comp-post-detail-bg-default: lch(97.832 1.2964 259.09);
      --comp-post-preview-bg-default: lch(96.748 1.9446 259.09);
      --output-color-border-default: rgb(20.207% 22.543% 25.571% / 0.1);
    }
    
    /* Yellow Dark Theme */
    body.theme-dark.color-yellow {
      --output-color-accent-primary: #ffbb38;
      --output-color-accent-lighter: #ffe3b2;
      --output-color-accent-on-accent: lch(45.009 57.323 62.765);
      --output-color-fg-primary: lch(97.832 1.2964 259.09);
      --output-color-fg-secondary: lch(93.495 3.8893 259.09);
      --comp-section-bg-default: lch(23.852 5.8071 258.98);
      --comp-button-primary-bg-default: #ffbb38;
      --comp-button-primary-bg-hover: #ffe3b2;
      --comp-button-primary-fg: lch(45.009 57.323 62.765);
      --comp-tag-bg: #545f6d;
      --comp-post-detail-bg-default: #545f6d;
      --comp-post-preview-bg-default: lch(35.778 8.7106 258.98);
      --output-color-border-default: rgb(91.036% 92.907% 95.522% / 0.1);
    }
    
    /* Ensure Storybook UI elements also get themed */
    .sb-show-main {
      background-color: var(--comp-section-bg-default) !important;
      color: var(--output-color-fg-primary) !important;
    }
  `;
  
  // Remove existing style if it exists
  const existing = document.head.querySelector('#theme-switching-variables');
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(style);
};

// Enhanced theme decorator to handle your project's theme system
const withTheme = (Story, context) => {
  const theme = context.globals.theme || 'light';
  const color = context.globals.color || 'blue';
  
  // Initialize theme CSS if not already done
  if (!document.head.querySelector('#theme-switching-variables')) {
    createThemeSwitchingCSS();
  }
  
  // Apply theme classes to document body
  document.body.className = `theme-${theme} color-${color}`;
  document.body.setAttribute('data-theme', theme);
  document.body.setAttribute('data-color', color);
  
  // Also apply to the storybook preview area
  const previewBody = document.querySelector('.sb-show-main');
  if (previewBody) {
    previewBody.className = `theme-${theme} color-${color}`;
    previewBody.setAttribute('data-theme', theme);
    previewBody.setAttribute('data-color', color);
  }
  
  // Create a wrapper div that will contain the story with proper theme context
  const wrapper = document.createElement('div');
  wrapper.className = `theme-${theme} color-${color}`;
  wrapper.setAttribute('data-theme', theme);
  wrapper.setAttribute('data-color', color);
  wrapper.style.minHeight = '100%';
  wrapper.style.backgroundColor = 'var(--comp-section-bg-default)';
  wrapper.style.color = 'var(--output-color-fg-primary)';
  wrapper.style.transition = 'all 0.2s ease-in-out';
  
  // Get the story content
  const storyContent = Story();
  
  // If it's a string, set innerHTML, otherwise append the element
  if (typeof storyContent === 'string') {
    wrapper.innerHTML = storyContent;
  } else {
    wrapper.appendChild(storyContent);
  }
  
  return wrapper;
};

preview.decorators = [withTheme];

export default preview;