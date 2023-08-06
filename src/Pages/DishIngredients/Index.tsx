import React from 'react';
import {
  DishDescription,
  DishHeaderContainer,
  DishImage,
  DishInfoContainer,
  DishIngredientsContainer,
  DishIngredientsProps,
  DishTitle,
  IngredientCategory,
  IngredientItem,
  IngredientsList
} from './DishIngredients.constant';

const DishIngredients: React.FC<DishIngredientsProps> = ({
  title,
  description,
  imageSrc,
  ingredients,
  setSelectedDishIngredients
}) => {
  return (
    <DishIngredientsContainer>
      <DishInfoContainer>
        <button onClick={() => setSelectedDishIngredients(null)}>Back</button>
        <DishHeaderContainer>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <DishTitle>{title}</DishTitle>
            <DishDescription>{description}</DishDescription>
          </div>
          <DishImage src={imageSrc} alt="" />
        </DishHeaderContainer>

        <IngredientsList>
          <div>
            <h2>Ingredients</h2>
            <p>for 2 people</p>
          </div>
          <IngredientCategory>
            <h3>Vegetables</h3>
            {ingredients.vegetables.map((ingredient, index) => (
              <IngredientItem key={index}>
                <p>{ingredient.name}</p>
                <p>{ingredient.quantity}</p>
              </IngredientItem>
            ))}
          </IngredientCategory>
          <IngredientCategory>
            <h3>Spices</h3>
            {ingredients.spices.map((ingredient, index) => (
              <IngredientItem key={index}>
                <p>{ingredient.name}</p>
                <p>{ingredient.quantity}</p>
              </IngredientItem>
            ))}
          </IngredientCategory>
        </IngredientsList>
      </DishInfoContainer>
    </DishIngredientsContainer>
  );
};

export default DishIngredients;
