import React from 'react';
import {IngredientState, Ingredient} from '../types';

interface Props {
  ingredients: IngredientState[];
  prices: Ingredient[];
}

const PriceCalculator: React.FC<Props> = ({ingredients, prices}) => {
  const calculateTotalPrice = (): number => {
    return ingredients.reduce((total, ingredientState) => {
      const ingredientPrice = prices.find(ingredient => ingredient.name === ingredientState.name)?.price || 0;
      return total + (ingredientPrice * ingredientState.count);
    }, 30);
  };

  return <div className="Price">Price: {calculateTotalPrice()} som</div>;
};

export default PriceCalculator;
