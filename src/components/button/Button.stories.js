import { CButton } from './index';

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
  template: '<c-button v-bind="$props">button</c-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  rounded: false,
  disabled: false,
}