import React, { useEffect } from 'react';
import './advantages.scss';

const Advantages = () => {
  useEffect(() => {
    sizeDiv();
  }, []);

  const sizeDiv = () => {
    var advInner = document.querySelector('.advantages__content');
    let rec;
    if (advInner != null) {
      rec = advInner.getBoundingClientRect();
      var div = document.querySelector('.advantages__background');
      var heightt = rec.height;
      var width = rec.width;
      div.style.borderWidth = `0 0 ${heightt + 116 + 112}px ${width}px`;
    }
  };

  window.addEventListener('resize', function() {
    sizeDiv();
  });

  return (
    <section
      id='advantages'
      className='container advantages margin-section--advantages'
    >
      <div className='advantages__background'></div>
      <div className='advantages__content'>
        <h2 className='title-margin title-accent'>
          Co wyróżnia sprzedaż do Housellin?
        </h2>
        <div className='columns'>
          <div className='column'>
            <div className='advantages__item'>
              <div className='text--md has-text-centered'>
                Sprzedaż do Housellin
              </div>
              <div className='advantages__description-wrapper'>
                <i className='far fa-check-circle'></i>
                <div className='advantages__description font--sm'>
                  Sprzedajesz mieszkanie nawet w 7 dni za kwotę ustaloną na
                  bazie cen rynkowych
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='far fa-check-circle'></i>
                <div className='advantages__description font--sm'>
                  Nie musisz przygotowywać ogłoszenia i umawiać dziesiątek
                  wizyt.
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='far fa-check-circle'></i>
                <div className='advantages__description font--sm'>
                  Jasne i przejrzyste koszty transakcji
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='far fa-check-circle'></i>
                <div className='advantages__description font--sm'>
                  Całość kwoty otrzymasz w kilka dni.
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='advantages__item advantages__item--second'>
              <div className='text--md has-text-centered'>
                Sprzedaż samodzielna
              </div>
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  Wystawiasz ogłoszenie po określonej przez siebie cenie i
                  czekasz na kupującego średnio nawet pół roku
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  Odbierasz dziesiątki telefonów, umawiasz wizyty i prezentujesz
                  mieszkanie zainteresowanym
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  W trakcie procesu pojawiają się nieznane wcześniej dodatkowe
                  koszty
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  Jeśli kupujący nie otrzyma kredytu, transakcja zostaje
                  anulowana
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='advantages__item advantages__item--third'>
              <div className='text--md has-text-centered'>
                Sprzedaż z agentem
              </div>
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  Agent przygotowuje ogłoszenie według ustalonej wspólnie ceny.
                  Wspólnie szukacie kupującego.
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  Razem z agentem zajmujesz się obsługą zainteresowanych i
                  negocjacjami, czas sprzedaży zależy od efektywności agenta.
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  Pokrywasz dodatkowe koszty i prowizję agenta
                </div>
              </div>
              <hr />
              <div className='advantages__description-wrapper'>
                <i className='fas fa-minus-circle'></i>
                <div className='advantages__description font--sm'>
                  Nie masz gwarancji, że sprzedaż dojdzie do skutku
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
