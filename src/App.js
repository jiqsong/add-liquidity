import { Input, Button, } from "antd";
import './App.css';
import { useCallback, useState } from "react";
import Web3 from 'web3';
import sushiSwapAbi  from "./abi/sushiSwap.json";
import erc20 from "./abi/erc20.json";
const network = 'matictest';
const swapAddress = '0x0f9C0558aA8ecdd365AB51248B42e6Fa851e59f3';
const rpc ='https://polygon-mumbai.blockpi.network/v1/rpc/public';



function App() {


  const web3 = new Web3(new Web3.providers.HttpProvider(rpc, {timeout: 15000}));
  // const swapContract = await new web3.eth.Contract(sushiSwapAbi, swapAddress);

  const [account, setAccount] = useState('');
  const [token1Address, setToken1Address] = useState('');
  const [token2Address, setToken2Address] = useState('');
  const [token1Amount, setToken1Amount] = useState('');
  const [token1Decimals, setToken1Decimals] = useState('');
  const [token2Decimals, setToken2Decimals] = useState('');
  const [token2Amount, setToken2Amount] = useState('');

  const onClickApprove1 = useCallback(async() => {
    const token1Contract = await new web3.eth.Contract(erc20, token1Address);
    const token1Decimals = await token1Contract.methods.decimals().call();
    await web3.eth.accounts.wallet.add(account);

    console.log(token1Decimals);
    const amount = token1Amount * (10 ** Number(token1Decimals));
    console.log(account, );
    await token1Contract.methods.approve(swapAddress, amount.toString()).send({from: account});
  }, [token1Address, token1Amount]);

  // const onClickApprove2 = useCallback(async() => {
  //   const token2Contract = await new web3.eth.Contract(erc20, token2Address);
  //   const token2Decimals = await token2Contract.methods.decimals().call();
  //   const amount = token1Amount * (10 ** Number(token1Decimals));
  //   await token2Contract.methods.approve(swapAddress, amount.toString()).send({from: 'account', gasLimit:300000 });
  // }, [token2Address, token2Amount, token2Decimals]);



  return (
    <div className="App">
      <div className="flex">
        <Input value={account} onChange={(e) => {setAccount(e.target.value)}}/>
      </div>
      <div className={'flex'}>
        <div className={'container'}>
          <p>代币地址</p>
          <div>
            <Input onChange={(e) => {setToken1Address(e.target.value)}} value={token1Address}></Input>
          </div>
        </div>
        {/* <div className={'container'}>
          <p>代币小数点</p>
          <div>
            <Input value={token1Decimals} onChange={(e) => {setToken1Decimals(e.target.value)}}></Input>
          </div>
        </div> */}
        <div className="container">
          <p>代币数量</p>
          <Input value={token1Amount} onChange={(e) => {setToken1Amount(e.target.value)}}/>
        </div>
      </div>
      <div className="flex1">
        <Button type="primary" block onClick={onClickApprove1} classNames="btn">授权</Button>
      </div>
      <div className={'flex'}>
        <div className={'container'}>
          <p>代币地址</p>
          <div>
            <Input width={'100px'} onChange={(e) => {setToken2Address(e.target.value)}} value={token2Address}></Input>
          </div>
        </div>
        {/* <div className={'container'}>
          <p>代币小数点</p>
          <div>
            <Input width={'100px'} value={token2Decimals} onChange={(e) => {setToken2Decimals(e.target.value)}}></Input>
          </div>
        </div> */}
        <div className="container">
          <p>代币数量</p>
          <Input width={'100px'} value={token2Amount} onChange={(e) => {setToken2Amount(e.target.value)}}/>
        </div>
      </div>
      <div className="flex1">
        <Button type="primary" block classNames="btn">授权</Button>
      </div>
      <div className="flex2">
        <Button type="primary" danger block>添加流动性</Button>
      </div>
    </div>
  );
}

export default App;
