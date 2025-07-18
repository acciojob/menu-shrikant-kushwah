import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const menuData = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://cdn.pixabay.com/photo/2016/03/18/22/02/pancakes-1265878_1280.jpg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://cdn.pixabay.com/photo/2021/08/27/11/46/milkshake-6578503_1280.jpg",
    desc: "Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://cdn.pixabay.com/photo/2015/06/25/17/56/baby-821625_1280.jpg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
    desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://cdn.pixabay.com/photo/2016/08/08/20/41/burning-love-1579245_1280.jpg",
    desc: "Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread.",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://cdn.pixabay.com/photo/2023/10/14/23/27/airplane-8315886_1280.jpg",
    desc: "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings.",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://cdn.pixabay.com/photo/2020/03/30/09/15/corona-4983590_1280.jpg",
    desc: "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix.",
  },
];


function App() {
  const [category, setCategory] = useState("All");

  const filteredItems = category === "All" ? menuData : menuData.filter((item) => item.category === category.toLowerCase());

  return (
    <div id="main">
      <h1 id="heading">Our Menu</h1>
      <div className="btn-container">
        <button id="#filter-btn-0" onClick={() => setCategory("All")}>All</button>
        <button id="#filter-btn-1" onClick={() => setCategory("Breakfast")}>Breakfast</button>
        <button id="#filter-btn-2" onClick={() => setCategory("Lunch")}>Lunch</button>
        <button id="#filter-btn-3" onClick={() => setCategory("Shakes")}>Shakes</button>
      </div>
      <Menu items={filteredItems} />
    </div>
  );
}

export default App;
