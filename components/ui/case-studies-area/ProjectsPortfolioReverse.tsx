import Link from "next/link"

import styles from './portafolio.module.css'

import AddLinkIcon from '@mui/icons-material/AddLink';
import { technology } from "@/interfaces/technology";


type Props = {
    outstanding: string;
    title: string;
    description: string;
    technologies: technology[];
    link: string;
    urlProject: string
}


export const ProjectsPortfolioReverse = ({ outstanding, title, description, technologies, link, urlProject }: Props) => {
    return (
        <section>
            <div className={styles['card-reverse']}>
                <div className={styles['area-briefcase-reverse']}>
                    <Link href={`${urlProject}`} target="_blank">
                        <img src={link} />
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
                                technologies.map((technology, index) => {
                                    return (
                                        <div className={styles['technologies-icon-reverse']} key={index}>
                                            <span className={styles['event-icon-reverse']}>{technology.name}</span>
                                            <img
                                                width={50}
                                                height={50}
                                                src={technology.url}
                                                key={technology.url} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
