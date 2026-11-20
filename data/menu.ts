export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'original' | 'new-launch';
  dishType: 'chicken' | 'paneer' | 'fries';
  isVeg: boolean;
  isSignature?: boolean;
  isNew?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  // Original Menu
  {
    id: "creamy-fries-bowl",
    name: "Creamy Fries Bowl",
    price: 119,
    category: "original",
    dishType: "fries",
    isVeg: true,
  },
  {
    id: "paneer-loaded-bowl",
    name: "Paneer Loaded Bowl",
    price: 129,
    category: "original",
    dishType: "paneer",
    isVeg: true,
  },
  {
    id: "classic-chicken-loaded-bowl",
    name: "Classic Chicken Loaded Bowl",
    price: 159,
    category: "original",
    dishType: "chicken",
    isVeg: false,
  },
  {
    id: "loaded-creamy-nachos-chicken-bowl",
    name: "Loaded Creamy Nachos Chicken Bowl",
    price: 179,
    category: "original",
    dishType: "chicken",
    isVeg: false,
  },
  {
    id: "supreme-2x-chicken-bowl",
    name: "Supreme 2X Chicken Bowl",
    price: 249,
    category: "original",
    dishType: "chicken",
    isVeg: false,
  },
  {
    id: "zingy-chicken-bowl",
    name: "Zingy Chicken Bowl",
    price: 169,
    category: "original",
    dishType: "chicken",
    isVeg: false,
  },
  {
    id: "korean-chicken-bowl",
    name: "Korean Chicken Bowl",
    price: 179,
    category: "original",
    dishType: "chicken",
    isVeg: false,
  },
  {
    id: "the-lavish-signature-loaded-bowl",
    name: "The Lavish Signature Loaded Bowl",
    price: 299,
    category: "original",
    dishType: "chicken",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "french-fries",
    name: "French Fries",
    price: 79,
    category: "original",
    dishType: "fries",
    isVeg: true,
  },
  {
    id: "2x-spicy-french-fries",
    name: "2X Spicy French Fries",
    price: 99,
    category: "original",
    dishType: "fries",
    isVeg: true,
  },

  // New Launches
  {
    id: "chipotle-chicken-loaded-bowl",
    name: "Chipotle Chicken Loaded Bowl",
    price: 179,
    category: "new-launch",
    dishType: "chicken",
    isVeg: false,
    isNew: true,
  },
  {
    id: "crispy-chicken-caesar-bowl",
    name: "Crispy Chicken Caesar Bowl",
    price: 179,
    category: "new-launch",
    dishType: "chicken",
    isVeg: false,
    isNew: true,
  },
  {
    id: "chilli-garlic-chicken-bowl",
    name: "Chilli Garlic Chicken Bowl",
    price: 189,
    category: "new-launch",
    dishType: "chicken",
    isVeg: false,
    isNew: true,
  },
  {
    id: "paneer-caesar-bowl",
    name: "Paneer Caesar Bowl",
    price: 169,
    category: "new-launch",
    dishType: "paneer",
    isVeg: true,
    isNew: true,
  },
  {
    id: "korean-paneer-bowl",
    name: "Korean Paneer Bowl",
    price: 179,
    category: "new-launch",
    dishType: "paneer",
    isVeg: true,
    isNew: true,
  },
  {
    id: "loaded-nachos-paneer-bowl",
    name: "Loaded Nachos Paneer Bowl",
    price: 179,
    category: "new-launch",
    dishType: "paneer",
    isVeg: true,
    isNew: true,
  },
  {
    id: "ultimate-cheesy-chicken-loaded-bowl",
    name: "Ultimate Cheesy Chicken Loaded Bowl",
    price: 299,
    category: "new-launch",
    dishType: "chicken",
    isVeg: false,
    isNew: true,
  },
  {
    id: "ultimate-cheesy-paneer-loaded-bowl",
    name: "Ultimate Cheesy Paneer Loaded Bowl",
    price: 269,
    category: "new-launch",
    dishType: "paneer",
    isVeg: true,
    isNew: true,
  },
];

export const FEATURED_ITEMS = MENU_ITEMS.filter(
  (item) =>
    item.id === "the-lavish-signature-loaded-bowl" ||
    item.id === "ultimate-cheesy-chicken-loaded-bowl" ||
    item.id === "loaded-creamy-nachos-chicken-bowl" ||
    item.id === "ultimate-cheesy-paneer-loaded-bowl" ||
    item.id === "korean-chicken-bowl" ||
    item.id === "paneer-loaded-bowl"
);
