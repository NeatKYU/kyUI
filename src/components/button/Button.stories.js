import { CButton } from './index';
import { expect } from '@storybook/jest';
import { userEvent, within, waitFor, screen } from '@storybook/testing-library';

export default {
  title: 'components/CButton',
  component: CButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CButton },
  template: '<c-button v-bind="$props"></c-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  rounded: false,
  disabled: false,
  label: 'testButton'
}

Primary.play = async ({ args }) => {
  const button = screen.getByRole('button');

  if(typeof args.label === 'string') {
    expect(button).toHaveTextContent(args.label)
  }
}
