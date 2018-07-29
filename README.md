### 开发流程总结

#### 1.环境准备

- 智能合约编译器solc

```js
npm install --save solc
```

- 测试工具mocha

```js
npm install --save mocha
```

- ganache测试环境

```js
npm install --save ganache-cli
```

- web3.js

```js
npm install --save web3
```

```js
若安装报错, 注意,部分windows电脑可能要安装的工具

npm install --global --production windows-build-tools 

终极大招,安装visual studio
```

#### 2.项目结构

- contracts	智能合约文件夹
  - Inbox.sol 智能合约
- test                 单元测试文件夹
  - Inbox.test.js  单元测试
- package.json
- compile.js     智能合约编译脚本
- deploy.js       智能合约部署脚本

#### 3.编写代码

##### 3.1.编写智能合约

##### 3.2.编写编译脚本

##### 3.3.编写测试脚本

##### 3.4.编写部署脚本