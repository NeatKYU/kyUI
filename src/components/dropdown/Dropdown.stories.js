import { CDropdown } from './index';

export default {
  title: 'components/CDropdown',
  component: CDropdown,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CDropdown },
  template: '<c-dropdown v-bind="$props">dropdown</c-dropdown>',
});

export const Primary = Template.bind({});
Primary.args = {
    dropdownList: ['dropdown test','korea','USA'],
}
