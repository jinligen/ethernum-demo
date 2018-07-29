/**
 * 部署智能合约到真实的rinkeby网络
 */
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
const HDWalletProvider = require('truffle-hdwallet-provider');
//助记词
const mnemonic = "你自己的助记词";
const provider = new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const web3 = new Web3(provider);

deploy = async() =>{
  //以太坊账户
  const accounts = await web3.eth.getAccounts();
  //智能合约
  const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({
          data:bytecode,
          arguments:['abc'],
      }).send({
          from:accounts[0],
          gas:'3000000'
      });
  console.log("address:" + result.options.address);
};

deploy();
