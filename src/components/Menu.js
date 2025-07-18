import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-items">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category}`}
        >
          <img src={item.img} alt={item.title} />
          <div className="details">
            <span className="title-price">
              <h4>{item.title}</h4>
              <p className="price">₹{item.price}</p>
            </span>
            <p className="desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
