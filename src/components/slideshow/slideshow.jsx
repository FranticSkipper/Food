"use client";

import BurgerImage from '@assets/burger.jpg';
import CurryImage from '@assets/curry.jpg';
import DumplingsImage from '@assets/dumplings.jpg';
import MacncheeseImage from '@assets/macncheese.jpg';
import PizzaImage from '@assets/pizza.jpg';
import SchnitzelImage from '@assets/schnitzel.jpg';
import TomatoSaladImage from '@assets/tomato-salad.jpg';
import classes from './slideshow.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
    { image: BurgerImage, alt: 'A delicious, juicy burger' },
    { image: CurryImage, alt: 'A delicious, spicy curry' },
    { image: DumplingsImage, alt: 'Steamed dumplings' },
    { image: MacncheeseImage, alt: 'Mac and cheese' },
    { image: PizzaImage, alt: 'A delicious pizza' },
    { image: SchnitzelImage, alt: 'A delicious schnitzel' },
    { image: TomatoSaladImage, alt: 'A delicious tomato salad' },
];

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => {
                setCurrentImageIndex((prevIndex) => {
                    return prevIndex < images.length ? prevIndex + 1 : 0
                })
            }, 5000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const imagesToRender = images.map((image, i) => (
        <Image
            key={i}
            src={image.image}
            className={i === currentImageIndex ? classes.active : ''}
            alt={image.alt}
        />
    ));

    return (
        <div className={classes.slideshow}>
            {imagesToRender}
        </div>
    );
}

export default Slideshow;