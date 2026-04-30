import styles from './DishCardSkeleton.module.css'

export function DishCardSkeleton() {
    return (
        <div className={styles.skeleton}>
            <div className={styles.imagePlaceholder}>
                <div className={styles.shimmer} />
            </div>
            <div className={styles.body}>
                <div className={styles.titleRow}>
                    <div className={`${styles.line} ${styles.lineTitle}`} />
                    <div className={`${styles.line} ${styles.linePrice}`} />
                </div>
                <div className={styles.lines}>
                    <div className={`${styles.line} ${styles.lineFull}`} />
                    <div className={`${styles.line} ${styles.lineMedium}`} />
                    <div className={`${styles.line} ${styles.lineShort}`} />
                </div>
                <div className={styles.chipsRow}>
                    <div className={styles.chipPlaceholder} />
                    <div className={styles.chipPlaceholder} />
                </div>
                <div className={`${styles.line} ${styles.lineButton}`} />
            </div>
        </div>
    )
}
