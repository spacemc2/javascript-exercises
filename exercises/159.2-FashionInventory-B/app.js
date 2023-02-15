let currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
  // your code here

  let output = [];
  inventory.map((designer) => {
    let average = 0;
    designer.shoes.map((shoe) => {
      average += shoe.price;
    });
    output.push({
      name: designer.name,
      averagePrice: average / designer.shoes.length,
    });
  });
  return output;
}

console.log(renderAverageCostPerDesigner(currentInventory));
