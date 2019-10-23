import React from 'react';
import './faq.scss';
import FaqItem from './FaqItem';
import { faqData } from '../../../../data/faq';

const Faq = () => {
  const toogleAnswer = e => {
    const answers = document.querySelectorAll('.faq__answer--active');
    const questions = document.querySelectorAll('.faq__question--active');

    if (e.currentTarget.classList.contains('faq__question--active')) {
      answers.forEach(node => {
        node.classList.remove('faq__answer--active');
      });

      questions.forEach(node => {
        node.classList.remove('faq__question--active');
      });
    } else {
      answers.forEach(node => {
        node.classList.remove('faq__answer--active');
      });

      questions.forEach(node => {
        node.classList.remove('faq__question--active');
      });

      e.currentTarget.classList.add('faq__question--active');

      e.currentTarget.nextSibling.classList.add('faq__answer--active');
    }
  };
  return (
    <div id='faq' className='margin-section'>
      <div className='container'>
        <h2 className='title-margin title-accent'>Najczęstsze Pytania</h2>
        <div className='columns is-multiline'>
          {faqData.map((item, index) => {
            return (
              <FaqItem key={index} item={item} toogleAnswer={toogleAnswer} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
