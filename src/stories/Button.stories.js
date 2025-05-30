export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: 'Standard button components with design token styling, hover effects, and theme support.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
      description: 'Button width style',
    },
  },
};

const ButtonTemplate = ({ text, disabled, width }) => {
  const widthStyle = width === 'auto' ? 'style="width: auto;"' : '';
  return `
    <section>
      <container>
        <div class="stack stack-default" style="flex-direction: column;">
          <button ${disabled ? 'disabled' : ''} ${widthStyle}>${text}</button>
        </div>
      </container>
    </section>
  `;
};

// Standard Button Stories
export const Default = ButtonTemplate.bind({});
Default.args = {
  text: 'Click me',
  disabled: false,
  width: 'full',
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  text: 'Disabled button',
  disabled: true,
  width: 'full',
};

export const AutoWidth = ButtonTemplate.bind({});
AutoWidth.args = {
  text: 'Auto width button',
  disabled: false,
  width: 'auto',
};

export const LongText = ButtonTemplate.bind({});
LongText.args = {
  text: 'This is a button with much longer text to test wrapping and how it behaves with the design tokens',
  disabled: false,
  width: 'full',
};