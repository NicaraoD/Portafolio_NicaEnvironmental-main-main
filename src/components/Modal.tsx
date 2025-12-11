import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from '../styles/Modal.module.css'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                    ×
                </button>
                {children}
            </div>
        </div>,
        document.body
    )
}
