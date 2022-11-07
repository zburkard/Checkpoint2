let clickUpgrades = [
  {
    name: 'minor key',
    price: 25,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'major key',
    price: 50,
    quantity: 0,
    multiplier: 2
  },
  {
    name: 'coconut',
    price: 100,
    quantity: 0,
    multiplier: 3
  }
];

let automaticUpgrades = [
  {
    name: 'bless-up',
    price: 300,
    quantity: 0,
    multiplier: 20
  }
];

let keys = 7000
let keyClick = 1
let totalKeys = 0
let autoUpgradeMulti = 0


function getKeys() {
  keys += keyClick
  totalKeys += keyClick
  update()
};

function update() {
  document.getElementById('keys').innerText = keys
  document.getElementById('currentMulti').innerText = keyClick
  document.getElementById('total-keys').innerText = totalKeys
  document.getElementById('current-auto').innerText = autoUpgradeMulti
};

function multiUpgrade(name) {
  let upgrade1 = clickUpgrades.find(u => u.name == name)

  if (keys >= upgrade1.price) {
    keys -= upgrade1.price
    keyClick += upgrade1.multiplier
    upgrade1.quantity += 1
    upgrade1.price += 25
  }
  document.getElementById(`${upgrade1.name}`).innerText = upgrade1.quantity
  update()
}

function timerUpgrade(name) {
  let upgrade2 = automaticUpgrades.find(u => u.name == name)


  if (keys >= upgrade2.price) {
    let keyInterval = setInterval(() => {
      keys += upgrade2.multiplier
      totalKeys += upgrade2.multiplier
      update()
    }, 3000)
    keys -= upgrade2.price
    upgrade2.quantity += 1
    autoUpgradeMulti += upgrade2.multiplier * upgrade2.quantity
    upgrade2.price += 50
    setTimeout(() => {
      clearInterval(keyInterval)
    }, 25000)
  }
  document.getElementById(`${upgrade2.name}`).innerText = upgrade2.quantity
  update()
}



