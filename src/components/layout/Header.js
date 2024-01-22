import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../../assets/icons/icons';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../utils/hooks/useCart';
import { useWishlist } from '../../utils/hooks/useWishlist';
import { searchProducts } from '../../store/reducers/productSlice';
import logoImage from '../../assets/icons/logo.png';

function Header() {
  const location = useLocation();
  const { quantity } = useCart();
  const { wishlistCount } = useWishlist();
  const dispatch = useDispatch();

  const isHome = location.pathname === '/';
  const isShop = location.pathname === '/shop';

  const handleSearchChange = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  return (
    <nav>
      <div className="header-container">
        <Link className="header-main header-section" to="/">
        <img src={logoImage} alt="Logo" className="logo" />
        <h1>   My Parapharmacy</h1>
        </Link>

        <div className="header-search header-section">
          <div className="input-wrapper">
            <FontAwesomeIcon icon={icons.search}></FontAwesomeIcon>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              name="search"
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="header-tools header-section">
          <Link to="/account">
            <div className="svg-icon">
              <FontAwesomeIcon icon={icons.user} />
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="svg-icon">
              <FontAwesomeIcon icon={icons.heart} />
              {wishlistCount > 0 && <span>{wishlistCount > 9 ? '9+' : wishlistCount} </span>}
            </div>
          </Link>
          <Link to="/cart">
            <div className="svg-icon">
              <FontAwesomeIcon icon={icons.cart} />
              {quantity > 0 && <span>{quantity > 9 ? '9+' : quantity} </span>}
            </div>
          </Link>
          <div className="burger">
            <FontAwesomeIcon icon={icons.hamburger} />
          </div>
        </div>
      </div>
      <div className={`header-line ${isHome || isShop ? 'active' : ''}`}></div>
    </nav>
  );
}

export default Header;
