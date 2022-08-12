import Footer from '.';

export default {
  title: 'components/ui/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => <Footer>页面Footer</Footer>;
Primary.storyName = '默认';
