import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
      <div className={styles.slideshow}>
        slideshow
      </div>

      <div>
        <div className={styles.hero}>
            <h1>Nextlevel Food for Nextlevel Foodies!</h1>
            <p>Taste & share food from all over the world.</p>
        </div>
        <div className={styles.cta}>
          <Link href="/meals">Meals</Link>
          <Link href="/community">Community</Link>      
        </div>
      </div>  
    </header>

<section className={styles.section}>
<h2>How it works</h2>
<p>
  NextLevel Food is a platform for foodies to share their favorite
  recipes with the world. It&apos;s a place to discover new dishes, and to
  connect with other food lovers.
</p>
<p>
  NextLevel Food is a place to discover new dishes, and to connect
  with other food lovers.
</p>
</section>

<section className={styles.section}>
<h2>Why NextLevel Food?</h2>
<p>
  NextLevel Food is a platform for foodies to share their favorite
  recipes with the world. It&apos;s a place to discover new dishes, and to
  connect with other food lovers.
</p>
<p>
  NextLevel Food is a place to discover new dishes, and to connect
  with other food lovers.
</p>
</section>
    </>
  );
}
