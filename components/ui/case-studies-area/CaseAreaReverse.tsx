import Link from "next/link"

import styles from './portafolio.module.css'

import AddLinkIcon from '@mui/icons-material/AddLink';
import { technology } from "@/interfaces/technology";


type Props = {
    outstanding: string;
    title: string;
    description: string;
    technologies: technology[];
}


export const CaseAreaReverse = ({ outstanding, title, description, technologies }: Props) => {
    return (
        <section>
            <div className={styles['card-reverse']}>
                <div className={styles['area-briefcase-reverse']}>
                    <Link href={'https://proyect-list.vercel.app/'} target="_blank">
                        <img src='../../../image/card-project/project-list.png' />
                        <AddLinkIcon className={styles['icon-link-reverse']
                        } fontSize='large' />
                    </Link>
                </div>
                <div className={styles['area-description-reverse']}>
                    <div className={styles['display-conteiner-description-reverse']}>
                        <div className={styles['conteiner-area-description-reverse']}>
                            <div className={styles['conteiner-text-reverse']}>
                                <h3>
                                    {outstanding}
                                </h3>
                                <h2>
                                    {title}
                                </h2>
                            </div>
                            <div className={styles['sterilized-dynamic-reverse']}>
                                <p>{description}</p>
                            </div>

                        </div>
                        <div className={styles['container-icons-languages-reverse']}>
                            {
                                technologies.map(technology => {
                                    return <img
                                        alt={technology.name}
                                        width={50}
                                        height={50}
                                        src={technology.url}
                                        key={technology.url} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
