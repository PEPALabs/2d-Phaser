// import { BN, Provider, Wallet } from "fuels";
// import { useEffect, useState } from "react";

// function App() {
//   const [balance, setBalance] = useState(0);

//   const provider = new Provider("https://beta-3.fuel.network/graphql");
//   const myWallet = Wallet.fromAddress("0x...", provider);

//   useEffect(() => {
//     myWallet.getBalances().then((data) => {
//       setBalance(new BN(data[0].amount).toNumber());
//     });
//   }, []);

//   return <div>My Balance: {balance}</div>;
// }

// export default App;