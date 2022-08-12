import Title from '.';

export default {
  title: 'components/ui/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => <Title>Button</Title>;
Primary.storyName = '默认';
