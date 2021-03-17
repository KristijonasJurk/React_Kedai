import React, { useState } from 'react'
import { GrClose, GrNext, GrPrevious } from 'react-icons/gr'

function Modal({ closeModal, modal, data, secondColor }) {

    const [currentImage, setCurrentImage] = useState(0);
    const [disableButton, setDisableButton] = useState(0)

    const nextImage = () => {
        setDisableButton(0)
        if (!secondColor) {
            if (currentImage === data.img.length - 1) {
                setDisableButton(1)
            } else {
                setCurrentImage(currentImage + 1)
            }
        } else {
            if (currentImage === data.img2.length - 1) {
                setDisableButton(1)
            } else {
                setCurrentImage(currentImage + 1)
            }
        }
    }
    const prevImage = () => {
        setDisableButton(0)
        if (!secondColor) {
            if (currentImage === 0) {
                setDisableButton(-1)
            } else {
                setCurrentImage(currentImage - 1)
            }
        } else {
            if (currentImage === 0) {
                setDisableButton(-1)
            } else {
                setCurrentImage(currentImage - 1)
            }
        }
    }

    return (
        <div className={`${modal ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className="modal-container">
                {!secondColor ?
                    <div className="modal-photo-container">
                        <img src={data.img[currentImage]} alt="" />
                    </div>
                    :
                    <div className="modal-photo-container">
                        <img src={data.img2[currentImage]} alt="" />
                    </div>

                }
                <div className="modal-buttons">
                    <button className="close-modal-btn" onClick={closeModal}>
                        <GrClose />
                    </button>
                    <button className={disableButton === 1 ? `next-modal-btn disabled` : `next-modal-btn`} onClick={nextImage}>
                        <GrNext />
                    </button>
                    <button className={disableButton === -1 ? `prev-modal-btn disabled` : `prev-modal-btn`} onClick={prevImage}>
                        <GrPrevious />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
