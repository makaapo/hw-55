import './App.css';
import React, {useState} from 'react';
import Burger from './components/Burger';
import IngredientList from './components/IngredientList';
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
  const [ingredient, setIngredient] =
    useState<IngredientState[]>([
      {name: 'Meat', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Salad', count: 0},
      {name: 'Bacon', count: 0},
    ]);

  const addIngredient = (ingredientName: string) => {
    setIngredient((prevIngredients) => {
      const existingIngredient = prevIngredients.find(piece =>
        piece.name === ingredientName);
      const ingredientDetails = INGREDIENTS.find(piece =>
        piece.name === ingredientName);
      if (existingIngredient && ingredientDetails) {
        return prevIngredients.map(piece =>
          piece.name === ingredientName ? {...piece, count: piece.count + 1} : piece
        );
      } else if (ingredientDetails) {
        return [...prevIngredients, {name: ingredientName, count: 1}];
      }
      return prevIngredients;
    });
  };

  const removeIngredient = (ingredientName: string) => {
    setIngredient((prevIngredients) => {
      return prevIngredients.map(piece =>
        piece.name === ingredientName ? {...piece, count: piece.count > 0 ? piece.count - 1 : 0} : piece
      ).filter(piece => piece.count > 0);
    });
  };

  return (
    <>
      <PriceCalculator ingredients={ingredient} prices={INGREDIENTS} />
      <div className="ListBurger">
        <IngredientList
          ingredients={INGREDIENTS}
          ingredientStates={ingredient}
          onAdd={addIngredient}
          onDelete={removeIngredient}
        />
        <Burger ingredients={ingredient} />
      </div>
    </>
  );
};

export default App;
