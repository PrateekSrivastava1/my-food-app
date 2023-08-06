import styled from 'styled-components';

export type Ingredient = {
  name: string;
  quantity: string;
};

export type DishIngredientsProps = {
  title: string;
  description: string;
  imageSrc: string;
  ingredients: {
    vegetables: Ingredient[];
    spices: Ingredient[];
  };
  setSelectedDishIngredients: any;
};

export const DishIngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const DishHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const DishInfoContainer = styled.div`
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
    flex: 1;
  }
`;

export const DishTitle = styled.p`
  font: normal normal 800 32px Open Sans;
`;

export const DishDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
  color: #707070;

  @media (min-width: 768px) {
    font-size: 16px;
    margin: 20px 0;
  }
`;

export const DishImage = styled.img`
  max-width: 100%;
  height: 300px;
  object-fit: cover;

  @media (min-width: 768px) {
    flex: 1;
    margin-top: 100px;
    max-width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

export const IngredientsList = styled.div`
  margin-top: 20px;
`;

export const IngredientCategory = styled.div`
  margin-top: 10px;

  h3 {
    font-size: 18px;
  }
`;

export const IngredientItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 14px;
`;
