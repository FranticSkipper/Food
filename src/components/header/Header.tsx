import Image from "next/image";
import Link from "next/link";
import LogoImage from "@assets/logo.png";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <Link href="/">
                    <Image 
                        src={LogoImage}
                        width={50}
                        height={50}
                        alt="Logo"
                        priority
                    />
                </Link>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Share</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}