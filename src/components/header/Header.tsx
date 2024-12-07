import Image from "next/image";
import Link from "next/link";
import LogoImage from "@assets/logo.png";
import styles from "./header.module.css";
import Navlink from "./navlink/Navlink";

const routes = [
    { id: 0, href: "/community", text: "Community" },
    { id: 1, href: "/meals", text: "Meals" },
];

export default function Header() {

    const routesToRender = routes.map(el => (
        <li key={el.id}>
            <Navlink href={el.href}>{el.text}</Navlink>
        </li>
    ))

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
                    {routesToRender}
                </ul>
            </nav>
        </header>
    );
}