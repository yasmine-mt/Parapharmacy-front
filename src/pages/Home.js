import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../assets/icons/hero.png';
import axios from 'axios';
import mergingImage from '../assets/icons/merging-image.png';

function Home() {
  const [recentlyAddedProducts, setRecentlyAddedProducts] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    axios.get('https://localhost:7089/api/Product')
      .then(response => {
        const recentProducts = response.data.slice(0, 3);
        setRecentlyAddedProducts(recentProducts);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits :', error);
      });
  }, []);

  const handleSeeMoreClick = () => {
    navigate('/shop');
  };

  return (
    <div className='home'>
      <div className='hero'>
        <img className='hero-img' src={heroImage} alt='Hero' style={{ marginTop: '200px' }} />
      </div>
      <img className='merging-img' src={mergingImage} alt='Merging' />
      <div className='hero-about'></div>
      <div className='container'>
        <div className="see-more-link" onClick={handleSeeMoreClick}>
          <p className="see-more-text">See All Our Products</p>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
