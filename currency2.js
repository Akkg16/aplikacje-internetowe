
let Currency2 = function(amount, nazwaWaluty) {
    this.amount = amount;
    this.nazwaWaluty = nazwaWaluty;
    switch(this.nazwaWaluty){
        case "dolar amerykanski":
            this.kurs = 4.021;
            break;
        case "BTC":
            this.kurs = 275336.77;
            break;
        case "ETH":
            this.kurs = 10203.93;
            break;
        case "euro":
            this.kurs = 4.35;
            break;
        case "lira turecka":
            this.kurs = 0.12;
            break;
    }
}

Currency2.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}
Currency2.prototype.PolishToWaluta = function(input) {
    return this.roundTwoDecimals(input / this.kurs);
}
Currency2.prototype.WalutaToPolish = function(input) {
    return this.roundTwoDecimals(input * this.kurs);
}

module.exports = exports = Currency2;

