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

function getLaceNameDataForShoes(inventory) {
  // your code here

  let output = [];
  inventory.map((designer) => {
    designer.shoes.map((shoe) => {
      if (shoe.name.includes("lace")) {
        output.push({
          nameWords: shoe.name.split(" "),
          targetWordIndex:
            shoe.name.split(" ").indexOf("laced") != -1
              ? shoe.name.split(" ").indexOf("laced")
              : shoe.name.split(" ").indexOf("lace-up"),
        });
      }
    });
  });
  return output;
}

console.log(getLaceNameDataForShoes(inventory));
