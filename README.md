# 郑州产业大脑PC端

项目基于 next.js 构建。
基于本框架提供的渲染方式，可选择 SSR 或者 CSR 的形式去构建。

[toc]

## 可用命令

### `yarn dev`
启动本地开发服务器

### `yarn build`
进行构建

### `yarn start`
启动本地正式服务器，执行前，需要确保通过 `yarn build` 命令构建过一次正式包。
此命令用于支持 SSR。

### `yarn export`
导出静态页面构建文件，用于 CSR，生成 build/ 文件夹，该目录下可通过 nginx、apache 等提供服务。

### `yarn storybook`
启动 storybook 用于开发“组件”或者查看其他人已编写的组件。

### `yarn build-storybook`
构建 storybook，用于部署。

### `yarn lint`
使用 eslint 检测代码风格相关问题。该 lint 命令会在 pre-commit 阶段执行一次。

### `yarn test`
执行项目中编写的 jest 测试内容。一般包含单元测试和快照测试，也可包含接口测试。

### `yarn test:watch`
以监听方式动态执行项目中编写的 jest 测试内容。用于 TDD 模式的开发。

### `yarn cypress:open`
打开 cypress，用于执行开发者可视的 e2e 测试。

### `yarn cypress:headless`
打开 cypress，使用无头浏览器执行 e2e 测试。

### `yarn e2e`
对本项目，构建并使用 cypress，基于系统浏览器执行 e2e 测试。

### `yarn e2e:headless`
对本项目，构建并使用 cypress，基于无头浏览器执行 e2e 测试。

## 如何提交
commit 信息须通过 commitlint 校验之后才能提交到代码仓库。
标准的 commit msg 如下所示：
```
feat: header，格式为 [type]: [header-subject]，必要

body，隔一行书写，非必要

footer 消息尾部，隔一行书写
```
信息包含三部分，header、body、footer，header必须，其他可选。
信息 header、body、footer 彼此之间需要插入空行，单行最多 100 字符，其中：

header 必须遵守 [type]: [subject] 的格式，其中，type 包含 feat、fix、chore、docs、build、ci、
perf、refactor、revert、style、test。
常用的有 feat（特性）、fix（修复）、chore（杂项）、docs（文档）。
header 的 type 必须小写，不可为空，必须为上述之一；subject 不可为空，前跟一空格符英文作为首字母时必须小写，尽量使用小写，
且结尾不可为 .
header 不可换行

## 分支管理
项目定义5种规范分支，分别为：
`master` 分支，正式环境，对用户开放
`test` 分支，用于测试人员测试、产品人员验收
`dev` 分支，用于开发人员测试、协作进行开发
`feature-[日期]/[作者]` 个人特性开发分支，例如：feature-20220803/tianye
`bugfix-[日期]/[作者]` 个人 bug 修复分支，例如：bugfix-20220803/tianye

### 工作流程
`master` => 个人分支 => `dev` / `test`
`test` => `master`

个人分支只可从 `master` 分支或者 `test` 分支进行新建，`test` 分支测试通过后同步到 `master` 分支进入生产构建
`dev` 分支作为中间分支，不设置分支保护，项目正式部署之后删除并基于 `master` 重新创建

！分支合并仅使用 `merge` 不使用 `rebase`
！`master`、`test` 分支为保护分支，不允许 force push

#### 特性开发
从 `master` 拉取个人分支，命名为 `feature-[日期]/[作者]`，开始开发。当开发完成后，提交代码到 `dev` 分支，相关人员部署（或自动部署），
进行随意性测试。    
确认功能无误，通知团队成员。功能相关人员得到通知后，一同合并代码至 `test` 分支，
确认成功提交后，删除远端分支，不过建议保留个人本地分支防止意外情况    
如果需要直接提测，可直接联系相关人员，提交至 `test`

#### 问题修复
从 `master/test` 拉取个人分支，看需要修复的环境，命名为 `bugfix-[日期]/[作者]`，开始修复工作，确认问题得到修复后，提至 `test` 分支， 
通知相关人员处理部署并进行进行测试，
合并至 `test` 分支后，可删除个人分支

::TIP: 如果处于人工测试阶段，则需要将改动保留至远端个人分支，等到测试工作结束，将相关变动合并到 `test` 分支

#### 开发冲突（多名协作者同步进度）
开发过程中，功能未完成时，如果遇到开发中的相互依赖的情况，**新建临时分支**，以不重复为原则建立即可，各人员切至此分支，`merge` 个人分支
到该分支， 随后将该分支同步到个人分支

## 如何开发组件

### 针对大型应用
针对大型应用中的特性，我们进行拆分，细颗粒度的基础组件，如 `Input` 等，对应 `/src/components/ui/Input` 编写；基础组件开发完毕后，
我们通过组合其他组件，在 `/src/features/authorization` 目录下创建 `LoginForm`，结合为业务组件，然后再通过 
`/src/features/authorization/index.js` 中导出的形式，统一供页面使用

### 针对中小型应用
针对中小型应用，建议以页面目录的形式组织放到 `features` 目录下，对应编写业务组件

### 组件开发方式

### 在 storybook 中开发
执行 `yarn storybook`，浏览器会打开 storybook 工具对应的页面， 使用 CSF 规范编写 `*.stories.jsx`，在隔离的沙盒里完成组件的开发，
最后在页面里组装真实数据。[如何编写 `*.stories.jsx` 的相关示例](https://storybook.js.org/docs/react/writing-stories/introduction)。

### 在页面中开发
执行 `yarn dev`，浏览器会启动项目主应用，像通常编写 React 应用一样开发即可，页面文件在 `pages` 中。

## 如何配置路由

项目中，路由采用页面路由的形式，在 `/src/pages` 中按文件名组织路由。通过 [pid].jsx 的形式定义[动态路由](https://nextjs.org/docs/routing/dynamic-routes)，
可以通过以下方式读取：
```js
// 路径：pages/post/[pid].js
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
}

export default Post;
```

## 项目结构

本项目的标准结构如下所示：
* `/src`
  * `__tests__` 页面和应用级的单元测试、接口测试文件放在这里
  * `/assets` 资源文件目录，根据文件类型又划分 `/images`、`/json`、`/video`
  * `/app` 应用整体的状态切片放在此目录
    * `apiSlice` RTK Query slice 的配置
    * `appSlice` App slice 的配置
    * `store.js` store 配置
  * `/components` 公共组件目录，各页面常用的组件放到此目录，应是与状态无关的，该目录中的组件尽量避免嵌套，该目录内样式仅使用 CSS Module
    * `*/*/index.jsx` */*匹配两级目录，第一层为组件分类，第二层目录为组件名称，该文件存放组件 JSX 代码
    * `*/*/index.module.less` 组件样式，仅允许其中编写 CSS Module 代码
    * `*/*/index.test.jsx` 测试文件，编写 Jest 测试代码
  * `/context` 存放全局 React Context 的目录
  * `/data` 数据目录，存放用到常量、样板数据等
  * `/features` 以功能为单位，内部以文件夹形式组织各个组件、函数等，内部的组件如果供外部使用，应该以 index.js(x) 形式向外暴露；
    内部目录结构重复使用 `/assets`、`/components`、`/data`、`/context`、`/service`、`/utils`、`/hooks` 等
    * `*/__tests__` 针对于该功能的测试存放在这里
      * `*.test.jsx` 功能测试文件
  * `/hooks` 项目公用的钩子函数目录
    * `/__tests__` 钩子函数测试文件目录
  * `/layout` 项目公用的布局目录，像是导航栏、页面布局、侧边栏
    * `/__tests__` 测试文件目录
  * `/lib` 存放外部依赖封装
    * `/__tests__` 测试文件目录
  * `/pages` 页面组件目录，该目录下，除了 `/api` 外，其他文件夹、jsx 为后缀的文件都将映射为路由，可以通过 [id].jsx 这样的命名格式，
    匹配路径符号外所有字符，同时将 id 作为查询参数
    * `/api` 该目录存放本项目定义的 api route，无法访问带有绝对路径的 api
    * `*.jsx` 页面文件，同时也是路由
  * `/services` api，以及 RTK Query 定义的端点 slice 包含在此目录内
  * `/stories` 该文件夹存放全局级别、页面级别的 stories，用于组件展示
    * `*.stories.jsx` 页面或者应用级 stories 文件
    * `*.stories.mdx` 额外的 stories 页面
  * `/styles` 该文件夹存放全局样式、页面的 CSS Module
    * `globals.css` 覆盖用户代理全局样式，用于覆盖基本样式
    * `custom.less` 自定义全局样式，所有非 CSS Module 写在这里
    * `*.module.less` 页面级别的 CSS Module
  * `/utils` 该文件夹存放小的工具类
* `/scripts` 项目执行脚本
* `/public` 公共文件，静态资源

## 代码规范

### 命名

一般地，文件名、文件夹名或是变量名尽量以简短为优先，可以根据上下文缩短

#### 变量

所有的变量命名都应该是语义化的：
```js
const [isTooltipVisible, setIsTooltipVisible] = useState(false);
```

所有的实例变量都应该遵守 camelCase：
```js
const someVars = 'camelCase';
```

所有常量字母大写，使用 `_` 连接各个部分：
```js
const PORT = '3300';
```

#### 文件（夹）名

所有非组件、高阶组件、自定义hook、页面的文件、文件夹遵守 camelCase，如：serviceWorker.js

组件使用 PascalCase，且需要建立目录，形成如下结构：
* `/SomeHeader`
  * `index.jsx` 核心代码
  * `index.module.less` 样式
  * `index.test.js` 测试代码
其中，`index.jsx` 默认导出组件，和目录一致

页面文件，即 `/src/pages` 目录下的文件，遵守 kebab-case，所有字母小写，使用连词符号连接，这也是路由的命名规范。

### 语法限制

* 所有语句以 `;` 进行结尾
* 优先使用解构变量 `const { a, b } = c;`
* 对象和数组中，多变量/键值对换行时，行尾结束时添加 `,`


## 注意事项
如果需要访问 window、document、localStorage、sessionStorage 等用户代理端对象，应该在 useEffect() 中操作。
```js
const [token, setToken] = useState(null);

useEffect(() => {
  setToken(localStorage.getItem('token'));
}, []);
```

## 文档
1. [next.js](https://nextjs.org/docs/getting-started)
2. [redux toolkit & RTK Query 官方文档](https://redux-toolkit.js.org/introduction/getting-started)
3. [redux toolkit & RTK Query 中文文档](https://docs.vanrinchy.com/rtk/)
4. [使用的 commitlint 规范](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
