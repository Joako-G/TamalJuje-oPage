import { useState } from 'react'
import type { IDish } from '../../../../interfaces/IDish'
import type { ISide } from '../../../../service/sidesService'
import { useCartStore } from '../../../../store/useCartStore'
import styles from './DishCard.module.css'

interface DishCardProps {
    dish: IDish;
    allSides: ISide[];
}

export function DishCard({ dish, allSides }: DishCardProps) {
    const { addToCart } = useCartStore()
    const { name, price, image_url, description } = dish
    const dishImageSrc = image_url ? image_url : '/images/logo.jpeg'

    const hasSides = dish.sides && dish.sides.length > 0
    const isPicante = name.toLowerCase().includes('picante de pollo') || name.toLowerCase().includes('picante de lengua')

    // Local editing state
    const [editing, setEditing] = useState(false)
    const [side1, setSide1] = useState<string>(dish.sides?.[0]?.name ?? '')
    const [side2, setSide2] = useState<string>(dish.sides?.[1]?.name ?? '')
    const [wantsExtraSide, setWantsExtraSide] = useState(isPicante)
    const [addedFeedback, setAddedFeedback] = useState(false)

    const defaultSideNames = dish.sides?.map(s => s.name) ?? []

    // Filter options so the same side can't be selected in both dropdowns
    const side1Options = allSides.filter(s => s.name !== side2)
    const side2Options = allSides.filter(s => s.name !== side1)

    const handleAddDefault = () => {
        addToCart(dish, defaultSideNames, wantsExtraSide)
        triggerFeedback()
    }

    const handleConfirmEdited = () => {
        const selectedSides = [side1, side2].filter(Boolean)
        addToCart(dish, selectedSides, wantsExtraSide)
        setEditing(false)
        triggerFeedback()
    }

    const handleCancel = () => {
        // Reset to defaults
        setSide1(dish.sides?.[0]?.name ?? '')
        setSide2(dish.sides?.[1]?.name ?? '')
        setWantsExtraSide(isPicante)
        setEditing(false)
    }

    const triggerFeedback = () => {
        setAddedFeedback(true)
        setTimeout(() => setAddedFeedback(false), 1200)
    }

    return (
        <div className={`card d-flex flex-column gap-1 p-0 w-100  ${styles.dish}`}>
            <div className='container-fluid p-0 w-auto m-0 position-relative'>
                <img className={` ${styles.image}`} src={dishImageSrc} alt={dishImageSrc} loading='lazy' />
                {!dish.enabled &&
                    <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${styles.disabledOverlay}`}>
                        <span className='text-white fw-bold'>No disponible</span>
                    </div>}

                {/* Added feedback overlay */}
                {addedFeedback && (
                    <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center ${styles.addedOverlay}`}>
                        <span className={styles.addedCheck}>✓ Agregado</span>
                    </div>
                )}
            </div>

            <div className="card-body p-4 d-flex flex-column">
                <div className={`d-flex flex-wrap justify-content-between align-items-center ${styles.titleContainer}`}>
                    <h1 className={`card-title text-white fw-bold m-0 flex-grow-1 ${styles.title}`}> {name} </h1>
                    <span className={`fw-bold ${styles.price}`}> $ {price.toLocaleString('es-AR')} </span>
                </div>
                <div className={`my-3 ${styles.content}`}>
                    <p className={`card-text mt-4 ${styles.text}`}> {description} </p>

                    {(hasSides || dish.allows_extra_side) && !editing && (
                        <div className='d-flex flex-column gap-2 my-3'>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className={styles.sidesLabel}>Guarniciones:</small>

                            </div>
                            <div className={styles.sidesContainer}>
                                {dish.sides?.map(s => (
                                    <span key={s.id} className={styles.sidesBadge}>{s.name}</span>
                                ))}
                                {dish.allows_extra_side && (
                                    <label className={`d-flex align-items-center gap-2 ms-4 ${styles.extraSideLabel}`}>
                                        <input
                                            type="checkbox"
                                            checked={wantsExtraSide}
                                            onChange={(e) => setWantsExtraSide(e.target.checked)}
                                            className={styles.extraSideCheckbox}
                                        />
                                        <span className="small">¿Chuño?</span>
                                    </label>
                                )}
                            </div>
                        </div>
                    )}

                    {hasSides && editing && (
                        <div className={`d-flex flex-column gap-2 my-3 ${styles.editSection}`}>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className={styles.sidesLabel}>Elegí tus guarniciones:</small>
                                {dish.allows_extra_side && (
                                    <label className={`d-flex align-items-center gap-2 ${styles.extraSideLabel}`}>
                                        <input
                                            type="checkbox"
                                            checked={wantsExtraSide}
                                            onChange={(e) => setWantsExtraSide(e.target.checked)}
                                            className={styles.extraSideCheckbox}
                                        />
                                        <span className="small">¿Chuño?</span>
                                    </label>
                                )}
                            </div>
                            <div className={styles.selectGroup}>
                                <select
                                    value={side1}
                                    onChange={(e) => setSide1(e.target.value)}
                                    className={styles.sideSelect}
                                >
                                    <option value="" disabled>Guarnición 1</option>
                                    {side1Options.map(s => (
                                        <option key={s.id} value={s.name}>{s.name}</option>
                                    ))}
                                </select>
                                <select
                                    value={side2}
                                    onChange={(e) => setSide2(e.target.value)}
                                    className={styles.sideSelect}
                                >
                                    <option value="">Sin segunda guarnición</option>
                                    {side2Options.map(s => (
                                        <option key={s.id} value={s.name}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* BUTTONS */}
                <div className={`d-flex flex-column gap-2 mt-auto ${styles.buttonGroup}`}>
                    {!editing ? (
                        <>
                            {hasSides && allSides.length > 0 && !isPicante && (
                                <button
                                    disabled={!dish.enabled}
                                    onClick={() => setEditing(true)}
                                    type="button"
                                    className={`btn w-100 rounded-pill ${styles.secondaryBtn}`}
                                >
                                    Cambiar guarnición
                                </button>
                            )}
                            <button
                                disabled={!dish.enabled}
                                onClick={handleAddDefault}
                                type="button"
                                className={`btn d-flex justify-content-center align-items-center w-100 p-3 gap-2 rounded-pill text-black fw-bold ${!dish.enabled ? styles.disabledBtn : styles.orderBtn}`}
                            >
                                <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Agregar al carrito
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleCancel}
                                type="button"
                                className={`btn w-100 rounded-pill ${styles.secondaryBtn}`}
                            >
                                Cancelar
                            </button>
                            <button
                                disabled={!side1}
                                onClick={handleConfirmEdited}
                                type="button"
                                className={`btn d-flex justify-content-center align-items-center w-100 p-3 gap-2 rounded-pill text-black fw-bold ${styles.orderBtn}`}
                            >
                                <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13l4 4L19 7" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Confirmar y agregar
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}