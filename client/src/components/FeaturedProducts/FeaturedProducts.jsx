import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1710481/pexels-photo-1710481.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/3026026/pexels-photo-3026026.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "iPhone",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3771084/pexels-photo-3771084.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Tablet",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/356055/pexels-photo-356055.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mac Book",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Laptop",
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          It is a device mainly used for a voice call. Presently technological
          advancements have made our life easy. Today, with the help of a mobile
          phone we can easily talk or video chat with anyone across the globe by
          just moving our fingers.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
