export const R = [
  ["Black Currant", "Fruity", 499, "#3a1a2e"],
  ["Cooper", "Woody", 549, "#8a4b1a"],
  ["Chocolate", "Gourmand", 449, "#4a2a14"],
  ["Green Ajmeri", "Fresh", 599, "#2f6b3a"],
  ["Green Apple", "Fruity", 399, "#6e9a2a"],
  ["Oud Royale", "Woody", 899, "#2a1a0a"],
  ["Rose Amber", "Floral", 649, "#b0476a"],
  ["White Musk", "Fresh", 479, "#c9c0a0"],
  ["Amber Noir", "Woody", 799, "#3b2410"],
  ["Sandal Majesty", "Woody", 699, "#a9772e"],
  ["Dark Musk", "Woody", 749, "#2b2230"],
  ["Leather Aoud", "Woody", 849, "#5a3418"],
  ["Vanilla Silk", "Gourmand", 549, "#d9b878"],
  ["Caramel Oud", "Gourmand", 599, "#a8651c"],
  ["Coffee Bean", "Gourmand", 499, "#3a2316"],
  ["Honey Dew", "Gourmand", 429, "#d3a237"],
  ["Jasmine Night", "Floral", 579, "#e8dcc6"],
  ["Lavender Mist", "Floral", 449, "#7f6aa8"],
  ["Saffron Rose", "Floral", 749, "#c4503f"],
  ["Peony Blush", "Floral", 529, "#e59ab0"],
  ["Ocean Breeze", "Fresh", 449, "#3b86a8"],
  ["Citrus Splash", "Fresh", 399, "#e0a61f"],
  ["Mint Vetiver", "Fresh", 499, "#4f8f6e"],
  ["Mango Tango", "Fruity", 429, "#e08a1e"]
];

export const P = R.map((p, i) => ({
  id: i < 8 ? i : 12 + i,
  name: p[0],
  fam: p[1],
  price: p[2],
  c: p[3],
  best: i < 3
}));

export const FC = {
  Fruity: "#3a1a2e",
  Woody: "#8a4b1a",
  Fresh: "#2f6b3a",
  Floral: "#b0476a",
  Gourmand: "#4a2a14"
};

export const NOTES = {
  Fruity: [
    ["Bergamot", "Wild berry"],
    ["Plum", "Peach"],
    ["Musk", "Vanilla"]
  ],
  Woody: [
    ["Saffron", "Cardamom"],
    ["Cedar", "Sandalwood"],
    ["Oud", "Amber"]
  ],
  Fresh: [
    ["Lemon", "Mint"],
    ["Green leaves", "Sea salt"],
    ["White musk", "Vetiver"]
  ],
  Floral: [
    ["Pink pepper", "Neroli"],
    ["Rose", "Jasmine"],
    ["Amber", "Sandalwood"]
  ],
  Gourmand: [
    ["Cocoa", "Cinnamon"],
    ["Caramel", "Coffee"],
    ["Vanilla", "Tonka"]
  ],
  Combo: []
};

export const COMBOS = [
  ["Signature Trio", [0, 1, 2]],
  ["Fresh & Fruity Trio", [3, 4, 7]],
  ["Royal Duo", [5, 6]]
].map((c, i) => {
  const sum = c[1].reduce((t, x) => t + P[x].price, 0);
  return {
    id: 8 + i,
    name: c[0],
    items: c[1],
    price: Math.round(sum * .9 / 10) * 10 - 1,
    orig: sum,
    combo: true,
    fam: "Combo",
    c: "#7a5a1a"
  };
});

export const ALL = Object.fromEntries([...P, ...COMBOS].map(p => [p.id, p]));

export const CATS = ["All", "Fruity", "Woody", "Fresh", "Floral", "Gourmand"];

export const SHOP_CATS = [...CATS, "Combo"];

export const SIZES = [6, 12, 24];

export const pz = (p, s) => p.combo || s === 12 ? p.price : Math.round(p.price * (s === 6 ? .6 : 1.8) / 10) * 10 - 1;
