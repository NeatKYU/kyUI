import { CInput } from './index';

export default {
  title: 'components/CInput',
  component: CInput,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CInput },
  template: '<c-input v-bind="$props"></c-input>',
});

export const Primary = Template.bind({});
Primary.args = {
    pPlaceholder: 'Primary input component'
}

export const Secondary = Template.bind({});
Secondary.args = {
    pPlaceholder: 'Secondary textarea component',
    pType: 'textarea'
}

