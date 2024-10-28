
/*
let currency = require('./currency1');
console.log('50 złotych polski odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency.PolishToUs(50));
console.log('30 dolarów amerykańskich odpowiada następującej ilości zlotych polskich:');
console.log(currency.USToPolish(30));
console.log('50 złotych polski odpowiada następującej ilości euro:');
console.log(currency.PolishToEuro(50));
console.log('30 euro odpowiada następującej ilości zlotych polskich:');
console.log(currency.EuroToPolish(30));
console.log('50 złotych polski odpowiada następującej ilości lir tureckich:');
console.log(currency.PolishToLira(50));
console.log('30 lir tureckich odpowiada następującej ilości polskich złotych:');
console.log(currency.LiraToPolish(30));
console.log('50 złotych polski odpowiada następującej ilości BTC:');
console.log(currency.PolishToBTC(50));
console.log('30 BTC odpowiada następującej ilości polskich złotych:');
console.log(currency.BTCToPolish(30));
console.log('50 złotych polski odpowiada następującej ilości ETH:');
console.log(currency.PolishToETH(50));
console.log('30 ETH odpowiada następującej ilości polskich złotych:');
console.log(currency.ETHToPolish(30));
*/



let Currency = require('./currency2');
let currency = new Currency(50,"dolar amerykanski");
console.log('50 dolarów amerykańskich odpowiada następującej ilości zlotych polskich:');
console.log(currency.WalutaToPolish(50));
console.log('50 złotych polski odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency.PolishToWaluta(50));