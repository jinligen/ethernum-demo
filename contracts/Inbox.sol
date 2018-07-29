pragma solidity ^0.4.17;

contract Inbox {
    //变量声明
    string public message;
    //构造函数
    function Inbox (string _message) public {
        message = _message;
    }
    //修改属性
    function setMessage(string _message) public {
        message = _message;
    }
    //获取属性
    function getMessage() public view returns (string) {
        return message;
    }
}
