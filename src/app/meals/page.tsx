import MealsGrid from "@components/meals-grid/MealsGrid";
import Link from "next/link";
import styles from "./meals.module.css";

export default function MealsPage() {
    return (
        <>
            <header className={styles.header}>
                <h1>Delicios meals, <span className={styles.highlight}>by you</span></h1>
                <p>Choose your favorite recipe!</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your favorite recipe!</Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    );
}