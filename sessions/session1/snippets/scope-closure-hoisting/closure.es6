function wallet(amount) {
  var money = amount;

  function add(amount) {
    money += amount;
  }

  function value() {
    return money;
  }

  return { add, value };
}

var myWallet = wallet(0);

myWallet.add(40);
myWallet.value(); // 40