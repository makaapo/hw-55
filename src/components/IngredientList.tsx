import React from 'react';
import {Ingredient, IngredientState} from '../types';

interface Props {
  ingredients: Ingredient[];
  ingredientStates: IngredientState[];
  onAdd: (ingredientName: string) => void;
  onDelete: (ingredientName: string) => void;
}

const IngredientList: React.FC<Props> = ({ingredients, ingredientStates, onAdd, onDelete }) => {
  return (
    <div className="IngredientList">
      {ingredients.map((ingredient) => {
        const ingredientState = ingredientStates.find(state => state.name === ingredient.name);
        const count = ingredientState ? ingredientState.count : 0;

        return (
          <div className='Buttons' key={ingredient.name}>
            <button className="Button" onClick={() => onAdd(ingredient.name)}>
              <img className="ButtonImg" src={ingredient.image} alt={ingredient.name} />
              {ingredient.name}
            </button>
            <span className="Quantity"> x{count} </span>
            {count > 0 && (
              <div className="DeleteButtonDiv">
                <button className="DeleteButton" onClick={() => onDelete(ingredient.name)}>
                  🗑️
                </button>
                <small className="DeleteButtonText">
                  Delete
                </small>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default IngredientList;
