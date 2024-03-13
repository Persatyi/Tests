// Калькулятор заточки в Lineage 2

let enchantScrollsCount = 0;
let blessedEnchantScrollsCount = 0;
let i = 0;
const mostEnchanted = {
  four: 0,
  five: 0,
  six: 0,
  seven: 0,
  eight: 0,
  nine: 0,
  ten: 0,
  eleven: 0,
  twelve: 0,
  thirteen: 0,
  fourteen: 0,
  fifteen: 0,
};

function calculate() {
  for (; i < 16; ) {
    // Умова при якій пушка точиться до 3х
    if (i < 3) {
      i += 1;
      enchantScrollsCount += 1;
      console.log("Safe enchant", i);
      continue;
    }

    const enchant = getRandomInt(2);
    console.log("🚀 ~ enchant:", enchant);

    if (enchant === 1) {
      i += 1;
      enchantNumber(i);
      blessedEnchantScrollsCount += 1;
      console.log("Non safe enchant", i);
      continue;
    }

    if (enchant === 0) {
      i = 0;
      blessedEnchantScrollsCount += 1;
      console.log("Fail");
      continue;
    }
  }
  console.log("i", i);
  console.log(
    "🚀 ~ totalItemCount:",
    enchantScrollsCount + blessedEnchantScrollsCount
  );
  console.log("🚀 ~ enchantScrollsCount:", enchantScrollsCount);
  console.log("🚀 ~ blessedEnchantScrollsCount:", blessedEnchantScrollsCount);
  console.log("🚀 ~ mostEnchanted:", mostEnchanted);
}

calculate();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function enchantNumber(num) {
  switch (num) {
    case 4:
      mostEnchanted.four += 1;
      break;
    case 5:
      mostEnchanted.five += 1;
      break;
    case 6:
      mostEnchanted.six += 1;
      break;
    case 7:
      mostEnchanted.seven += 1;
      break;
    case 8:
      mostEnchanted.eight += 1;
      break;
    case 9:
      mostEnchanted.nine += 1;
      break;
    case 10:
      mostEnchanted.ten += 1;
      break;
    case 11:
      mostEnchanted.eleven += 1;
      break;
    case 12:
      mostEnchanted.twelve += 1;
      break;
    case 13:
      mostEnchanted.thirteen += 1;
      break;
    case 14:
      mostEnchanted.fourteen += 1;
      break;
    case 15:
      mostEnchanted.fifteen += 1;
      break;

    default:
      break;
  }
}
