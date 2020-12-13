import React from 'react';
import LandingForm from '../components/LandingForm/LandingForm';
import './styles/home.css';
import Img1 from '../public/novidade.png';
import Img2 from '../public/img2.jpeg';
import Prosseguir from '../components/prosseguir/Prosseguir';


function Home(){
    return(
        <>
            <Prosseguir />
            <section id='section-img1'>
                <div className='section-img1'>
                    <h2>Novidades</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint et ea, quo iusto laudantium ipsam. Nobis vero iste dolorum alias iure quae reprehenderit, tenetur nam ipsa veniam perferendis voluptas voluptatibus nisi, quam consequatur, soluta corporis. Suscipit aut iusto fugit earum dolore facilis rerum sunt?</p>
                </div>
                <img src={Img1} alt="Novidade" id='img1'/>
            </section>
            <section id='section-img2'>
                <div className='section-img2'>
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corrupti culpa porro quisquam, quasi modi accusantium consequatur impedit eaque dolor nulla libero earum autem ipsa natus iusto. Minima voluptatum voluptate dolorum voluptates fugit, molestiae distinctio pariatur officia ullam error sunt dicta, delectus placeat perspiciatis perferendis.</p>
                </div>
                <img src={Img2} alt="Lorem" id='img2'/>
            </section>
            <Prosseguir />
        </>
    );
}
export default Home;