import { CRadioGroup } from './index';
import * as CRadioStories from './Radio.stories'

export default {
  title: 'components/CRadioGroup',
  component: [ CRadioGroup ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CRadioGroup },
  template: '<c-radio-group v-bind=$props></c-radio-group>',
});

export const Primary = Template.bind({});
Primary.args = {
    pRadioList: [
        'radio1',
        'radio2',
        'radio3'
    ]
}

