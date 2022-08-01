import { CRadio } from './index';

export default {
  title: 'components/CRadio',
  component: [ CRadio ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes).filter((v) => v !== 'value'),
  data() {
    return { value: '' };
  },
  components: { CRadio },
  template: '<c-radio v-model="value" v-bind=$props>radio</c-radio>',
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'radio',
    value: '',
    buttonMode: false,
}