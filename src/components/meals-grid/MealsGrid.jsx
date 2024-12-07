import styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
    const mealsToRender = meals.map(el => (
        <li key={el.id}></li>
    ));
    return (
        <ul className={styles.meals}>
            {mealsToRender}
        </ul>
    );
}

export default MealsGrid;