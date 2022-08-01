import { CBreadcrumb, CBreadcrumbItem } from './index';

export default {
  title: 'components/CBreadcrumb',
  component: [ CBreadcrumb, CBreadcrumbItem ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CBreadcrumb, CBreadcrumbItem },
  template: '<c-breadcrumb>'+
    '<c-breadcrumb-item>one</c-breadcrumb-item>'+
    '<c-breadcrumb-item>two</c-breadcrumb-item>'+
    '<c-breadcrumb-item href="/three" active>three</c-breadcrumb-item>'+
    '</c-breadcrumb>',
});

export const Primary = Template.bind({});
Primary.args = {
}

