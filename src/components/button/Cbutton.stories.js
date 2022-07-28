import { CButton } from './index';

export default {
  title: 'KYUI/CButton',
  component: CButton,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CButton },
  template: '<c-button v-bind="$props">button</c-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  leftIcon: 'angle-left'
}
