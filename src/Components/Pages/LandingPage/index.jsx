import React, { useEffect, useState } from 'react'
import Card from '../../Card'
import cardService from '../../../Services/cardService';
import Layout from "../../Layout"
import "./style.css"

function Index() {
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        fetchCardData();
    }, []);

    const fetchCardData = async () => {
        const response = await cardService.getCardData();
        console.log("response  ", response.data);
        setCardList(response.data);
    }


    return (
        <Layout>

            <div className='card-container'>
                {
                    cardList && cardList?.map((cardData, idx) => (
                        <Card key={idx} cardData={cardData} />
                    ))
                }
            </div>

        </Layout>
    )
}

export default Index