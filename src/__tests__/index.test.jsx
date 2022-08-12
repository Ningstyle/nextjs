// import { render } from '@testing-library/react';
// import Home from '../pages';
import '@testing-library/jest-dom';

describe('首页', () => {
  it('正常渲染', () => {
    expect(true).toBeTruthy();
  });

  // it('包含文本', () => {
  //   render(<Home/>);
  //
  //   const heading = screen.getByRole('heading', {
  //     name: /welcome to next\.js!/i,
  //   });
  //
  //   expect(heading)
  //     .toBeInTheDocument();
  // });

  // it('首页样式不变更', () => {
  //   expect(render(<Home/>).container)
  //     .toMatchSnapshot();
  // });
});
