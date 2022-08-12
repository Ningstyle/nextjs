/**
 * husky 准备脚本，当环境为 ci 时，不进行 husky 的安装
 */
const isCi = process.env.CI !== undefined;
if (!isCi) {
  require('husky')
    .install();
}
