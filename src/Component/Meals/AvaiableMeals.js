import classes from './AvaiableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Thịt heo ',
        description: 'Ngon thì thôi rồi',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Bò Mỹ ',
        description: 'Ăn hết nửa con ',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Gà Chạy bộ ',
        description: 'hết nước chấm ',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Món bịa',
        description: 'Quên lối về ',
        price: 18.99,
    },
];

const AvaiableMeals = () => {

    const mealList = DUMMY_MEALS.map(meal =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    )
}
export default AvaiableMeals