import './App.css';
import React, {useState} from 'react';
import PriceCalculator from './components/PriceCalculator';
import {IngredientState, Ingredient} from './types';
import meatImage from './assets/meet.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/becon.png';

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

const App: React.FC = () => {
  const [ingredient] =
    useState<IngredientState[]>([
      {name: 'Meat', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Salad', count: 0},
      {name: 'Bacon', count: 0},
    ]);

  return (
    <>
      <PriceCalculator ingredients={ingredient} prices={INGREDIENTS} />
    </>
  );
};

export default App;
