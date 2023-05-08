import React, { useCallback, useEffect, useState } from 'react'

import styles from "./menu.module.css";

import { ActiveLink } from './ActiveLink';

import { IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const menuItems = [
    { text: 'Inicio', href: '/' },
    { text: 'Proyectos', href: '/proyectos' },
    { text: 'Skills', href: '/skills' },
    { text: 'About Me', href: '/About' },
]

//Funcion para responsive movil, adaptable a cualquier dispositivo
export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const onClickMenu = () => {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }
    const onScroll = useCallback(() => {
        const { pageYOffset, scrollY } = window;
        if (pageYOffset > 100) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }, []);


    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak
        return () => {
            document.removeEventListener("scroll", onScroll);
        }
    }, []);


    return (
        <header className={`${styles['main-header']} ${isScroll ? styles['is-sticky'] : ''}`}>
            <div className={styles['flexbox']}>
                <div className={`${styles['con']}`}>
                    <img className={`${styles['logo-header']}`} src='../../../image/3.png' />
                    <img className={`${styles['img-logo-responsive']} `} src='../../../image/2.png' />
                    <div>
                        <IconButton className={`${styles['button-container']}`} onClick={onClickMenu}>
                            {isOpen ? (
                                <CloseIcon color='primary' className={`${styles['btn-menu-header']}`}
                                    fontSize='large'
                                />
                            ) : (
                                <MenuIcon color='primary' className={`${styles['btn-menu-header']}`}
                                    fontSize='large'
                                />
                            )}
                        </IconButton>
                    </div>
                </div>
                <nav className={`${styles['menu-group']} ${isOpen ? styles["show"] : ""}`}>
                    {menuItems.map(({ text, href }) => (
                        <ActiveLink href={href} text={text} key={href} />
                    ))}
                </nav>
            </div>
        </header>

        // <header className={styles['main-header']}>
        //     <div className={styles['align-elements-center']}>
        //         <div className={`${styles['flexbox']} ${isScroll ? styles['is-sticky'] : ''}`}>
        //             <div className={`${styles['con']}`}>
        //                 <img className={`${styles['logo-header']}`} src='../../../image/3.png' />
        //                 <img className={`${styles['img-logo-responsive']} `} src='../../../image/2.png' />
        //                 <div>
        //                     <IconButton className={`${styles['button-container']}`} onClick={onClickMenu}>
        //                         {isOpen ? (
        //                             <CloseIcon color='primary' className={`${styles['btn-menu-header']}`}
        //                                 fontSize='large'
        //                             />
        //                         ) : (
        //                             <MenuIcon color='primary' className={`${styles['btn-menu-header']}`}
        //                                 fontSize='large'
        //                             />
        //                         )}
        //                     </IconButton>
        //                 </div>
        //             </div>
        //             <nav className={`${styles['menu-group']} ${isOpen ? styles["show"] : ""}`}>
        //                 {menuItems.map(({ text, href }) => (
        //                     <ActiveLink href={href} text={text} key={href} />
        //                 ))}
        //             </nav>
        //         </div>
        //         <div className={styles['row-align-items-center']}>
        //             <div className={styles['introduction-profile']}>
        //                 <p>Hola, mi nombre es</p>
        //                 <h1> Josue Percy</h1>

        //                 <p>Soy desarrollador web, autodidacta en el aprendizaje, esperó que el portafolio sea de curiosidad para algunas personas y disfruten mis proyectos🚀</p>
        //                 <ButtomConfetti />
        //             </div>
        //             <div className={styles['introduction-profile']}>
        //                 <img src='../../../image/portada-header.png' className={styles['profile-photo']} />
        //             </div>
        //         </div>
        //     </div>
        // </header>
    )
}
