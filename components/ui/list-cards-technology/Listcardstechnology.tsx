import React from 'react'

import styles from './listcard.module.css'

import Link from 'next/link'

type ITechnologies = {
    name: string,
    link: string
    url: string,
}
export const Listcardstechnology = ({ name, url, link }: ITechnologies) => {
    return (

        <div className={styles["technology-items"]} >
            <Link
                href={link}>
                <img
                    width={50}
                    height={50}
                    src={url}
                />
                <div>
                    <span>
                        {name}
                    </span>
                </div>
            </Link>
        </div>
    )
}
