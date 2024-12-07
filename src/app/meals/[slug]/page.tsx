import { getMeal } from "@/lib/meals";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SlugPage({ params }: any) {
    const { slug } = await params;
    const meal = await getMeal(slug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image
                        src={meal.image}
                        alt={meal.title}
                        fill
                    />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}>
                        by <Link href={`mailto:${meal.creator_email}`}>{meal.creator}</Link>
                    </p>
                    <p className={styles.summary}></p>
                </div>
            </header >
            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}></p>
            </main>
        </>
    );
}