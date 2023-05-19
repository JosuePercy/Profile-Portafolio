import React from 'react';
import styles from './footer.module.css';
import { Networks } from '@/components/ui/social-networks';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';



export const Footer = () => {
    const redesData = [
        { redes: '../../../image/Networks/icon-tweet.png', link: 'https://twitter.com/JosuePercy12' },
        { redes: '../../../image/Networks/icons-github.png', link: 'https://github.com/JosuePercy' },
        { redes: '../../../image/Networks/icons8-linkedin-30.png', link: 'https://www.linkedin.com/in/josuehuallullo/' },

        // Agrega más objetos para cada red que desees mostrar
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles['display-footer']}>
                <div className={styles['display-center column-1']}>
                    <img className={styles['logo-footer']} src='../../../image/3.png' />
                    <div className={styles['display-networks']}>
                        {redesData.map((red, index) => (
                            <Networks key={index} redes={red.redes} link={red.link} />
                        ))}
                    </div>
                </div>
                <div className={styles['column-2']}>
                    <h1>Contactos</h1>
                    <div className={styles['conteiner-contacts']}>
                        <div className={styles['colun']}>
                            <div className={styles['mold-circular-icon']}>
                                {
                                    <EmailIcon fontSize='inherit' sx={{ color: 'white' }} />
                                }

                            </div>
                            <span>josuehuallullo12@gmail.com</span>
                        </div>
                        <div className={styles['colun']}>
                            <div className={styles['mold-circular-icon']}>
                                {
                                    <PhoneIcon fontSize='inherit' sx={{ color: 'white' }} />
                                }
                            </div>
                            <span>+51 998 166 826</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
