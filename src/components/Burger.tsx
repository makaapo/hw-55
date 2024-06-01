import React from 'react';
import {IngredientState} from '../types';

interface Props {
  ingredients: IngredientState[];
}

const Burger: React.FC<Props> = ({ingredients}) => {
  const VisualIngredients = (): React.ReactNode[] => {
    const ingredientElements: React.ReactNode[] = [];

    for (const ingredient of ingredients) {
      for (let i = 0; i < ingredient.count; i++) {
        ingredientElements.push(
          <div key={`${ingredient.name}-${i}`} className={ingredient.name}></div>
        );
      }
    }

    return ingredientElements;
  };

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {VisualIngredients()}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;