import React from 'react';
import styles from './networks.module.css';
import Link from 'next/link';

type Props = {
    redes: string;
    link: string;
};

export const Networks = ({ redes, link }: Props) => {
    return (
        <div className={styles['align-circular-container']}>
            <div className={styles['container-circular']}>
                <Link href={link}>
                    <img width={15} height={15} src={redes} />
                </Link>
            </div>
        </div>
    );
};