import type { ReactElement } from "react";
import styles from './HtoStep.module.css'

interface HtoStepProps {
    step: number;
    title: string;
    text: string;
    children: ReactElement
}

export function HtoStep({ step, title, text, children }: HtoStepProps) {
    return (
        <div className={`d-flex flex-column gap-3 p-4 rounded-3 h-100 ${styles.card}`}>

            <h1 className={`d-flex justify-content-center align-items-center rounded-circle ${styles.step}`}> {step} </h1>

            <h3 className='fw-bold'> {title} </h3>

            <p className='text-secondary'> {text} </p>

            <div className='text-end mt-auto'>
                {children}
            </div>

        </div>
    )
}