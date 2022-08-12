import TreeChart from '.';
import data from './data.json';

export default {
  title: 'components/charts/TreeChart',
  component: TreeChart,
};

export const Primary = () => (
  <div style={{ width: '80vw', height: '80vh', backgroundColor: '#aaa' }}>
    <TreeChart data={data} />
  </div>
);
Primary.storyName = '默认';
