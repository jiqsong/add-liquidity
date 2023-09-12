// const Web3 = require( 'web3');
// const sushiSwapAbi  = require("./abi/sushiSwap.json")
// const erc20 = require("./abi/erc20.json")
// const fs = require('fs')
// const key = '';

// // ./bvault-apy.js --matictest
// const network = 'matictest'
// const rpc ='https://polygon-mumbai.blockpi.network/v1/rpc/public';


// const getAddLiquidity = async (network, swapAddress, token0Address,token1Address,token0Num,token1Num,userAddr) => {
//   const web3 = new Web3(new Web3.providers.HttpProvider(rpc, {timeout: 15000}));
//   const swapContract = await new web3.eth.Contract(sushiSwapAbi, swapAddress);

//   const privateKey = key;
//   const account = await web3.eth.accounts.wallet.add(privateKey);

//   // console.log(account);


//   const token0Contract = await new web3.eth.Contract(erc20, token0Address);
//   const token0Decimals = await token0Contract.methods.decimals().call()
//   const token0Amount = token0Num * (10 ** Number(token0Decimals))

//   const token1Contract = await new web3.eth.Contract(erc20, token1Address);
//   const token1Decimals = await token1Contract.methods.decimals().call()

//   const token1Amount = token1Num * (10 ** Number(token1Decimals))
//   // console.log(swapAddress, typeof account.address);
//   await token0Contract.methods.approve(swapAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from: account.address, gasLimit:300000 });
//   await token1Contract.methods.approve(swapAddress, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({ from: account.address,gasLimit:300000 });
//   try {
//     console.log("aaa is:", account.address,token0Address,token1Address,token0Amount,token1Amount,userAddr)
//     const result = await swapContract.methods.addLiquidity(
//       token0Address,
//       token1Address,
//       token0Amount.toString(),
//       token1Amount.toString(),
//       '0',
//       '0',
//       userAddr,
//       Math.floor(Date.now() / 1000) + 60 * 10
//     ).send({ from: account.address, gasLimit:300000});
//     console.log("result: is",result);
//   } catch (error) {
//     console.error("error:", error);

//   }

// }


// if (network == 'matictest') {

//   getAddLiquidity(network, '0x0f9C0558aA8ecdd365AB51248B42e6Fa851e59f3', '0x8275483Ee0Ab81e6DEfe58DDF2b2bDeF0d37Cb26','0x25d9ebc0186da816ef90d75742ff8e447dc6c9f2',10,10,'0x509BEb227769B2eaCb4E0B30954Ae14a92E4A3ea')

// } else if (network == 'bsctest') {

//   getAddLiquidity(network,'0x0f9C0558aA8ecdd365AB51248B42e6Fa851e59f3','0x3fB067B48041AA09BFA60DA04b7969fB13600b3d','0x25D9ebC0186dA816EF90D75742FF8e447Dc6c9f2',2,6,'0xC73294df307aa8E86111Da6ac8d7935A28137bC9')

// } else if (network == 'avaxtest') {

//   getAddLiquidity(network, '0x0f9C0558aA8ecdd365AB51248B42e6Fa851e59f3', '0x2E689B51ce825830A581b72323a3C156CA3458Ae','0x25D9ebC0186dA816EF90D75742FF8e447Dc6c9f2',2,6,'0xC73294df307aa8E86111Da6ac8d7935A28137bC9')
// }
