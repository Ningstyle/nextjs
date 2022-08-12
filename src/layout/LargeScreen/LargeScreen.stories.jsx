import LargeScreen from '.';

export default {
  LargeScreen: 'layout/LargeScreen',
  component: LargeScreen,
};

export const Primary = () => <LargeScreen>LargeScreen</LargeScreen>;
Primary.storyName = '默认';
