import React from 'react';
import './benefits.scss';

const Benefits = () => {
  return (
    <div id='benefits' className='container'>
      <h2 className='title-margin title-accent'>Jakie są korzyści?</h2>
      <div className='columns'>
        <div className='column benefit'>
          <div className='benefit__title has-text-centered'>
            Skracasz czas sprzedaży
          </div>
          <div className='benefit__description has-text-centered'>
            <span className='benefit__number-accent'>1</span>
            <span>
              Średni czas sprzedaży mieszkania w Polsce to kilka miesięcy. Z
              nami możesz sfinalizować transakcję nawet w 7 dni.
            </span>
          </div>
        </div>
        <div className='column benefit benefit--second'>
          <div className='benefit__title has-text-centered'>
            Masz pewność ceny
          </div>
          <div className='benefit__description has-text-centered'>
            <span className='benefit__number-accent'>2</span>
            <span>
              Oferty opieramy o ceny rynkowe, wykorzystując zaawansowane
              algorytmy, analizujące tysiące transakcji sprzedaży mieszkań.
            </span>
          </div>
        </div>
        <div className='column benefit benefit--third'>
          <div className='benefit__title has-text-centered'>
            Nie tracisz czasu i nerwów
          </div>
          <div className='benefit__description has-text-centered'>
            <span className='benefit__number-accent'>3</span>
            <span>
              Nie musisz przejmować się remontem ani sprzątaniem. Unikniesz
              odbierania telefonów i wizyt potencjalnych kupujących
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
