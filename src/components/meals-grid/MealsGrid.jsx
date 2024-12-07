import MealItem from "./meals-item/meals-item";
import styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
    const mealsToRender = meals.map(el => (
        <li key={el.id}>
            <MealItem {...el} />
        </li>
    ));
    return (
        <ul className={styles.meals}>
            {mealsToRender}
        </ul>
    );
}

export default MealsGrid;