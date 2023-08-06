import { Input } from '@prateeksrivastava1/nahi-aati-css';
import { useState } from 'react';
import DishCard from '../../Components/FoodCard';
import { Dish } from '../../Components/FoodCard/FoodCard.constant';
import Header from '../../Components/Header';
import TagsList from '../../Components/TagsList';
import Toast from '../../Components/Taost';
import { tagData, TimeContainer } from './SelectDishes.constant';

type SelectDishesPropType = {
  setSelectedDishIngredients: any;
  dishData: any;
};

const SelectDishes: React.FC<SelectDishesPropType> = ({
  setSelectedDishIngredients,
  dishData
}) => {
  const [totalSelectedFoodItems, setTotalSelectedFoodItems] = useState(0);

  return (
    <>
      <Header headerName="Select Dishes" />
      <TimeContainer>
        <Input type="date" />
        <Input type="time" />
        <Input type="time" />
      </TimeContainer>
      <div style={{ margin: '40px 20px 0 0', display: 'flex', flexDirection: 'row' }}>
        <TagsList tags={tagData} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <p style={{ font: 'normal normal bold 22px Open Sans' }}>Popular Dishes</p>
        </div>
        <TagsList tags={dishData.popularDishes} />
      </div>
      <hr
        style={{
          width: '100%',
          height: '5px',
          backgroundColor: '#D3D3D3',
          border: 'none'
        }}
      />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ font: 'normal normal bold 22px Open Sans' }}>Recommended</p>
          <p style={{ font: 'normal normal bold 22px Open Sans' }}>Menu</p>
        </div>
        <div>
          {dishData.dishes.map((dish: Dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              setTotalSelectedFoodItems={setTotalSelectedFoodItems}
              totalSelectedFoodItems={totalSelectedFoodItems}
              setSelectedDishIngredients={setSelectedDishIngredients}
            />
          ))}
        </div>
      </div>
      <Toast totalSelectedFoodItems={totalSelectedFoodItems} />
    </>
  );
};

export default SelectDishes;
