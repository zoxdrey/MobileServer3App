import React from 'react';
import GymCard from './gymCard';

export function CardsFeed(props) { 
    const numbers = props.cardsCount;
    console.log(numbers);
    function handleClick(e){
      
        numbers.pop();
        console.log(numbers);
    }

    let cardsFeed = numbers.map((cardNumber) => 
        <GymCard key={cardNumber} cardNumber={cardNumber} updateData={handleClick}></GymCard>)

    return (
        <div className='row m-1'>
        {cardsFeed}
        </div>
)}