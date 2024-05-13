import React from 'react';
import { IoMdClose } from "react-icons/io";
import "./style.css";

function Index({ handleModal, selectedData }) {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='closeIconwrapper'>
                    <IoMdClose className='close' onClick={handleModal} />
                </div>
                <div className='cardContent'>
                    <img src={selectedData?.thumbnail.large} alt="cities" className='imageUrl' />
                    <div className='card-content-wrapper'>
                        <h1 className='card-title'>{selectedData?.title}</h1>
                        <p className='card-content'>{selectedData?.content}</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='image-avatar-wrapper'>
                        <img src={selectedData?.author.avatar} alt='avatar'  className='image-avatar'/>
                    </div>
                    <p className='card-content'>{selectedData?.author.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Index;