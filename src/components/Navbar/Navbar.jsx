import React, { useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BiShoppingBag, BiMenu } from 'react-icons/bi';
import IconBtn from '../Elements/IconBtn';
import Nav from './Nav';
import { CartContext } from '../../context/cart-context';
const Navbar = ({ history }) => {
  const { cartItems } = useContext(CartContext);

  const pushHandler = () => {
    history.push('/cart');
    window.scrollTo(0, 0);
  };

  const [toggle, setToggle] = useState(false);

  const navbarOpen = () => {
    document.body.style.overflow = 'hidden';
    setToggle(true);
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__wrapper'>
          <Link to='/' className='navbar__logo'>
            LOGICS
          </Link>
          <Nav toggle={toggle} setToggle={setToggle} />
          <div className='navbar__end'>
            <IconBtn className='navbar__end-shopping' onClick={pushHandler}>
              <BiShoppingBag />
              {cartItems.length !== 0 ? <span>{cartItems.length}</span> : null}
            </IconBtn>
            <IconBtn className='navbar__toggle-btn' onClick={navbarOpen}>
              <BiMenu />
            </IconBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
