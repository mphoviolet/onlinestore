import React from 'react';
import Data from '../../Data';
import './PageStyles.css';
const Home = () => {
  return (
    <section className='home'>
        {Data.map((item) =>(
            <div className='wrapper'>
                    <div className='slider'>
                    <div className='image'>
                        <img src={item.image} />
                    </div>
                    <div className='slider-nav'>
                            <div className='dots active'></div>
                            <div className='dots'></div>
                            <div className='dots'></div>
                    </div>
                    </div>
                    <div className='content'>
                        <h1>GET 30% ON ALL YOUR SALES</h1>
                        <p>Ranging from kids, women, men, sporting
                            at a discountable prices</p>
                        <button>Shop Now...!!!</button>
                    </div>
                    <div className='image' key={item.id}>
                        <img src={item.image} />
                    </div>
            </div>
         ))}
    </section>
  );
}
export default Home;
