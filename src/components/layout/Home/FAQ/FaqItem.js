import React from 'react';

const FaqItem = ({ item, toogleAnswer }) => {
  return (
    <div className='column is-offset-2 is-8'>
      <p className='faq__question' onClick={toogleAnswer}>
        {item.question}
        <i className='fas fa-chevron-down'></i>
        <i className='fas fa-chevron-up'></i>
      </p>
      <p className='faq__answer'>{item.answer}</p>
    </div>
  );
};

export default FaqItem;
