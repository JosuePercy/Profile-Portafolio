import React from 'react'
import styles from "./banner.module.css";
import { ButtomConfetti } from '@/components/ui';

export const BannerProfile = () => {
    return (
        <div className={styles['main-header']}>
            <div className={styles['align-elements-center']}>
                <div className={styles['row-align-items-center']}>
                    <div className={styles['introduction-profile']}>
                        <p>Hola, mi nombre es</p>
                        <h1> Josue Percy</h1>

                        <p>Soy desarrollador web, autodidacta en el aprendizaje, esperó que el portafolio sea de curiosidad para algunas personas y disfruten mis proyectos🚀</p>
                        <div className={`${styles['container-buttom']}`}>
                            <ButtomConfetti />
                        </div>
                    </div>
                    <div className={styles['introduction-profile']}>
                        <img src='../../../image/portada-header.png' className={styles['profile-photo']} />
                    </div>
                </div>
            </div>
        </div>
    )
}
