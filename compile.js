/**
 * 编译智能合约的脚本
 */
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//获取智能合约路径
const srcPath = path.resolve(__dirname,'contracts','Inbox.sol');
//读取智能合约
const source = fs.readFileSync(srcPath,'utf-8');
//编译智能合约
const result = solc.compile(source,1);
module.exports = result.contracts[':Inbox'];