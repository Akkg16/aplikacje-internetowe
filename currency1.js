
//Podejście bez wykorzystywania obiektu

let usDollar = 4.021;
let euro = 4.35;
let liraTurkish = 0.12;
let BTC = 275336.77;
let ETH = 10203.93;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}
//Dollar
exports.USToPolish = function(input){
    return roundTwoDecimals(input * usDollar);
}
exports.PolishToUs = function(input){
    return roundTwoDecimals(input / usDollar);
}
//Euro
exports.EuroToPolish = function(input){
    return roundTwoDecimals(input / euro);
}
exports.PolishToEuro = function(input){
    return roundTwoDecimals(input * euro);
}
//Lira
exports.LiraToPolish = function(input){
    return roundTwoDecimals(input * liraTurkish);
}
exports.PolishToLira = function(polish){
    return roundTwoDecimals(polish / liraTurkish);
}
//BTC
exports.BTCToPolish = function(input){
    return roundTwoDecimals(input * BTC);
}
exports.PolishToBTC = function(polish){
    return polish / BTC;
}
//ETH
exports.ETHToPolish = function(input){
    return roundTwoDecimals(input * ETH);
}
exports.PolishToETH = function(polish){
    return polish / ETH;
}
