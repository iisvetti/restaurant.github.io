import React, { useState } from 'react';

const CardMenu = ({
  items,
  handleAddToOrder,
  showModal,
  orderItems,
  rejected,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleButtonClick = (id, title, price) => {
    if (showModal && orderItems.length === 0) {
      return;
    }

    if (selectedItems.includes(id)) {
      setSelectedItems(prevSelectedItems =>
        prevSelectedItems.filter(itemId => itemId !== id)
      );
      handleAddToOrder(title, price, false);
    } else {
      setSelectedItems(prevSelectedItems => [...prevSelectedItems, id]);
      handleAddToOrder(title, price, true);
    }
  };

  return (
    <div className="section-center">
      {items.map(menuItem => {
        const { id, title, price, img, desc } = menuItem;
        const isSelected = selectedItems.includes(id);

        return (
          <article
            id={id}
            className={`menu-item ${rejected ? 'rejected' : ''}`}
            key={id}
          >
            <img src={img} alt={title} className="photo" />

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}hrn</h4>
              </header>
              <p className="item-text">{desc}</p>
              <button
                type="button"
                className={`order-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => handleButtonClick(id, title, price)}
              >
                {isSelected ? 'Added' : 'To order'}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CardMenu;
