import dynamic from 'next/dynamic';
import zhCN from 'antd/lib/locale/zh_CN';
import Script from 'next/script';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import '../styles/globals.css';
import '../styles/custom.less';

// export default wrapper.withRedux(MyApp);
const isSSREnabled = process.env.NEXT_PUBLIC_SSR_ENABLED.toString() === 'true';
moment.locale('zh-cn');

const App = dynamic(() => import('../app/App'), {
  ssr: isSSREnabled,
});

export default props => (
  <ConfigProvider locale={zhCN}>
    <App {...props} />
    <Script src="/static/d3.min.js" />
  </ConfigProvider>
);
