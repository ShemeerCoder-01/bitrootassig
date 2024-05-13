import React, { useState } from 'react';
import './style.css';
import Modal from "../Common/Modal"

function Card({ cardData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dynamicOpac, setDynamicOpac] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };

    const handleModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }


    return (
        <>
            <div className='card-wrapper' onClick={handleModal}>
                <div className='image-wrapper'>
                    <img src={cardData?.thumbnail.large} alt="cities" className='imageUrl' />

                    <p className='image-hover-text'
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        style={{ opacity: isMouseOver ? "1" : "0" }}
                    >Learn more</p>
                </div>
                <div className='card-content-wrapper'>
                    <div className='flex'>
                        <div className='blue-dot'></div>
                        <div className='yellow-dot'></div>
                    </div>
                    <h1 className='card-title'>{cardData?.title}</h1>
                    <p className='card-content'>{cardData?.content}</p>
                </div>
            </div>
            {
                isModalOpen &&
                <Modal selectedData={cardData} handleModal={handleCloseModal} />
            }
        </>
    )
}

export default Card;