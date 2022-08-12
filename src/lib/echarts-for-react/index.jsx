// 从这里引入，直接可进行 CSR，如果需要启用 SSR，使用 core 目录中的文件
import dynamic from 'next/dynamic';

const ReactEcharts = dynamic(() => import('./core'), { ssr: false });

export default ReactEcharts;
