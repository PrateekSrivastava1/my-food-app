export const vegetableIngredients = [
  { name: 'Tomato', quantity: '2 pcs' },
  { name: 'Onion', quantity: '1 pc' },
  { name: 'Bell Pepper', quantity: '1 pc' },
  { name: 'Carrot', quantity: '1 pc' }
];

export const spiceIngredients = [
  { name: 'Coriander Powder', quantity: '1 tsp' },
  { name: 'Cumin Powder', quantity: '1/2 tsp' },
  { name: 'Turmeric Powder', quantity: '1/4 tsp' },
  { name: 'Red Chili Powder', quantity: '1/2 tsp' },
  { name: 'Garam Masala', quantity: '1/2 tsp' },
  { name: 'Salt', quantity: 'to taste' }
];

export type Equipment = string;

export type Dish = {
  id: number;
  name: string;
  rating: number;
  description: string;
  equipments: Equipment[];
  image: string;
};

export type DishData = {
  dishes: Dish[];
  popularDishes: Dish[];
};
