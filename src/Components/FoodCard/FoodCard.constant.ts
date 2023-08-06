import styled from 'styled-components';

export interface Dish {
  name: string;
  rating: number;
  description: string;
  equipments: string[];
  image: string;
  id: number;
}

export interface CardContainerProps {
  imagePresent: boolean;
}

export interface DishCardProps {
  dish: Dish;
  totalSelectedFoodItems: any;
  setTotalSelectedFoodItems: any;
  setSelectedDishIngredients: any;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;

export const LeftColumn = styled.div`
  padding: 10px;
  flex: 3;

  p {
    margin: 5px 0;
  }

  .row {
    display: flex;
    column-gap: 10px;
    margin-bottom: 10px;
  }

  .equipments {
    font-weight: bold;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  position: relative;

  @media (min-width: 768px) {
    width: 92px;
    height: 68px;
    margin-left: 400px;
  }

  img {
    display: block;
    max-width: 100%;
    height: 150px;
    position: absolute;
    border-radius: 10px;
    top: 10px;
    left: -10px;
  }
`;
