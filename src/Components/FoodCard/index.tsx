import React from 'react';
import {
  CardContainer,
  DishCardProps,
  LeftColumn,
  RightColumn
} from './FoodCard.constant';

const DishCard: React.FC<DishCardProps> = ({
  dish,
  totalSelectedFoodItems,
  setTotalSelectedFoodItems,
  setSelectedDishIngredients
}) => {
  return (
    <CardContainer imagePresent={!!dish.image}>
      <LeftColumn>
        <div className="row">
          <p style={{ font: 'normal normal 600 17px Open Sans' }}>{dish.name}</p>
          <div
            style={{
              width: '15px',
              height: '15px',
              border: '1px solid green',
              backgroundColor: 'white',
              padding: '5px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <p
              style={{
                border: '1px solid green',
                borderRadius: '10px',
                width: '1px',
                backgroundColor: 'green'
              }}
            ></p>
          </div>
          <p>{dish.rating}</p>
        </div>
        <div className="row">
          <div className="equipments">
            {dish.equipments && dish.equipments.join(', ')}
          </div>
          <div
            id={dish.id.toString()}
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedDishIngredients(dish.id)}
          >
            Ingredients List
          </div>
        </div>
        <div style={{ font: 'normal normal normal 17px Open Sans', color: '#707070' }}>
          {dish.description}
        </div>
      </LeftColumn>
      {dish.image && (
        <>
          <RightColumn>
            <img src={dish.image} alt={dish.name} />
            <button
              style={{
                position: 'absolute',
                top: '145px',
                left: '10px',
                width: '60px',
                height: '25px',
                borderRadius: '5px',
                border: '1px solid #FFAE42',
                textAlign: 'center',
                margin: '3px',
                color: '#FFAE42',
                padding: '5px',
                cursor: 'pointer'
              }}
              onClick={() => setTotalSelectedFoodItems(totalSelectedFoodItems + 1)}
            >
              Add +
            </button>
          </RightColumn>
        </>
      )}
    </CardContainer>
  );
};

export default DishCard;
