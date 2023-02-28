import { Header } from "@/components";


import arrow from './assets/arrow.svg';
import vector from './assets/vector.svg';
import discount from './assets/discount.svg'

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='main__container'>
          <div className='main__left-side'>
            <h1 className='main__title'>Quality apparel without the price tag</h1>
            <p className='main__text'>No need to spend $xxx on apparel just for the name’s sake. Our premium apparel is made from the same stuff.</p>
            <div className='button__wrapper'>
              <button className='main__button'>Browse our collection</button>
              <a className='main__link' href="#">
                Spring ‘23 Collection
                <img className='arrow' src={arrow} alt="arrow" />
              </a>
            </div>
            <div className='main__announce'>
              <img className='main__announce-image' src={vector} alt="vector" />
              <div className='text__wrapper'>
                <p className='title__announce'>50K</p>
                <p className='text__announce'>We’re proud to announce that we now employ a workforce of over <span className='solid__text'>50,000</span>. It’s all possible because of you.</p>
              </div>
            </div>
          </div>
          <div className='main__right-side'>
            <div className="banner__holder">
              <div className="shoes">
                <div className="shoes__inner">
                  <h2 className='shoes__title'>Fauxica Sport</h2>
                  <p className='shoes__text'>Running shoe</p>
                  <p className='shoes__price'>$59</p>
                </div>
                <img className="shoes__image" src={discount} alt="discount" />
              </div>
              <div className='banner__wrapper'>
                <div className="small__banner">
                  <div className="shoes__inner">
                    <h2 className='shoes__title'>Fauxica Sport</h2>
                    <p className='shoes__text'>Running shoe</p>
                    <p className='shoes__price'>$59</p>
                  </div>
                </div>
                <div className="small__banner-1">
                  <div className="shoes__inner">
                    <h2 className='shoes__title'>Fauxica Sport</h2>
                    <p className='shoes__text'>Running shoe</p>
                    <p className='shoes__price'>$59</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


export default App;

