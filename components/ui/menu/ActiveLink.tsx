import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";
import styles from "./menu.module.css";

const style: CSSProperties = {
    fontSize: '14px'
};

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link className={styles['menu-sterilized']} style={style} href={href}>
            {text}
        </Link>
    );
};
