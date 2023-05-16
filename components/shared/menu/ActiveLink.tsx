import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC, useEffect, useRef } from "react";
import styles from "./menu.module.css";

const style: CSSProperties = {
    fontSize: '15px',
};

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        if (href == "") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        else {
            const elem = document.querySelector(href);
            elem?.scrollIntoView({
                behavior: "smooth",
            });
        }

    };



    return (
        <>
            <Link className={styles['menu-sterilized']} style={style} href={href} onClick={handleScroll} >
                {text}
            </Link>
        </>
    );
};
