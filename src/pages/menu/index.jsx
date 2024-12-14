import React, { useState, useEffect } from 'react';
import {
  HeroMenu,
  MenuSection,
  StyledWrapper,
  StyledSpan,
  TitleMenu,
  MainContent,
} from './styles/index';
import './styles/style.css';
import Categories from './categories';
import CardMenu from './cardMenu';
import items from './dataMenu';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    const savedOrderItems = localStorage.getItem('orderItems');
    if (savedOrderItems) {
      setOrderItems(JSON.parse(savedOrderItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
  }, [orderItems]);

  const filterItems = category => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  const handleOrderClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleAddToOrder = (title, price) => {
    const newItem = { title, price };
    setOrderItems(prevItems => [...prevItems, newItem]);
    console.log('Ordered:', title);
  };

  const handleConfirmOrder = () => {
    setIsOrderPlaced(true);
  };

  const handleRejectOrder = () => {
    closeModal();
    setOrderItems([]);
    localStorage.removeItem('orderItems');
    setShowModal(false); 
  };

  const orderTotal = orderItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <MenuSection>
      <HeroMenu>
        <div className="heroMenu"></div>
        <StyledWrapper>
          TeaHouse <StyledSpan> Restaurant</StyledSpan>
          <TitleMenu>Menu</TitleMenu>
        </StyledWrapper>
      </HeroMenu>

      <MainContent>
        <Categories
          filterItems={filterItems}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <CardMenu
          items={menuItems}
          handleAddToOrder={handleAddToOrder}
          rejected={showModal && orderItems.length === 0}
        />
      </MainContent>

      {showModal && (
        <div className="modal" onClick={handleBackdropClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{isOrderPlaced ? 'Thank you for order!' : 'You ordered:'}</h2>
            {isOrderPlaced ? (
              <p>Enjoy your meal!</p>
            ) : (
              <>
                <ul>
                  {orderItems.map((item, index) => (
                    <li key={index}>
                      {item.title} - {item.price}hrn
                    </li>
                  ))}
                </ul>
                <p>Total price: {orderTotal}hrn</p>
                <div className="modal-buttons">
                  <button className="confirm-btn" onClick={handleConfirmOrder}>
                    To order
                  </button>
                  <button className="reject-btn" onClick={handleRejectOrder}>
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <button className="fixed-button" onClick={handleOrderClick}>
        Order
      </button>
    </MenuSection>
  );
}

export default Menu;
