import type { ReactElement } from "react";
import styles from './InfoCard.module.css'

interface InfoCardProps {
    children: ReactElement;
    titel: string;
    text: string;
    color: string;
    action: string
}


export function InfoCard({ titel, color, text, action, children }: InfoCardProps) {
    return (
        <div className={`d-flex flex-column gap-4 col-9 p-4 mt-5 rounded ${styles.card}`}>
            {children}
            <div>
                <h3> {titel} </h3>
                <p className='mb-2'> {text} </p>
            </div>
            <div className={`w-100 mt-auto ${styles.border}`} />
            <a style={{ color: `${color}` }} href="" className='mt-auto text-decoration-none'> {action} </a>
        </div>
    )
}