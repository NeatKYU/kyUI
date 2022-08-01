import { CPagination } from './index';

export default {
  title: 'components/CPagination',
  component: [ CPagination ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CPagination },
  template: '<c-pagination v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
    totalCount: 101,
    perPage: 10,
    currentPage: 1,
}

