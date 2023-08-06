import axios from 'axios';
import { useEffect, useState } from 'react';
import { DishData, spiceIngredients, vegetableIngredients } from './Global.constants';
import DishIngredients from './Pages/DishIngredients/Index';
import SelectDishes from './Pages/SelectDishes/Index';
import { PageContainer } from './Pages/SelectDishes/SelectDishes.constant';

function App() {
  const [selectedDishIngredients, setSelectedDishIngredients] = useState<number | null>(
    null
  );
  useEffect(() => {
    setSelectedDishIngredients(null);
  }, []);

  useEffect(() => {
    console.log(selectedDishIngredients);
  }, [selectedDishIngredients]);

  const [dishData, setDishData] = useState<DishData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/'
        );
        setDishData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dishData) {
    return <div>No data available</div>;
  }

  return (
    <PageContainer>
      {selectedDishIngredients ? (
        <DishIngredients
          title={dishData.dishes[selectedDishIngredients - 1].name}
          description={dishData.dishes[selectedDishIngredients - 1].description}
          imageSrc={dishData.dishes[selectedDishIngredients - 1].image}
          ingredients={{
            vegetables: vegetableIngredients,
            spices: spiceIngredients
          }}
          setSelectedDishIngredients={setSelectedDishIngredients}
        />
      ) : (
        <SelectDishes
          dishData={dishData}
          setSelectedDishIngredients={setSelectedDishIngredients}
        />
      )}
    </PageContainer>
  );
}

export default App;
