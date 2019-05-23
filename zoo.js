let prices = [10.3, 5.1, 3.55];
let clients = ["student", "child", "uncle"];
let maxPrice = Math.max(...prices);

let maxIndex = prices.indexOf(maxPrice);
let priceUp = Math.ceil(maxPrice);
console.log(
  `The highest price is ${priceUp} Euro and would be paid by ${
    clients[maxIndex]
  }`
);

let hour = new Date().getHours();
let time;

if (hour >= 8 && hour <= 20) {
  time = "day";
} else {
  time = "night";
}

let locations = ["petting zoo", "sleeping house", "escaped"];

switch (time) {
  case "day":
    location = locations[0];
    break;
  case "night":
    location = locations[1];
    break;
  default:
    location = locations[2];
}

if (location !== "escaped") {
  console.log(
    `It is ${time} time therefore the animals will be in the ${location}`
  );
} else {
  console.log(`It is ${time} time therefore the animals will have ${location}`);
}
