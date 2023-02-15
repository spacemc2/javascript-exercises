let inventory = [
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

function renderInventory(shoeList) {
  let output = [];
  shoeList.map((designer) => {
    designer.shoes.map((shoe) => {
      let item = [designer.name];
      item.push(shoe.name);
      item.push(shoe.price);
      if (shoe.name.includes("black")) output.push(item);
    });
  });
  return output;
}
