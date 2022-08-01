import { CRadio } from './index';

export default {
  title: 'components/CRadio',
  component: [ CRadio ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CRadio },
  template: '<c-radio v-bind=$props>test</c-radio>',
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'radio'
}

