import { useEffect, useState } from "react";
import API from "../../constants/api";
import "./propertyList.css";

const PropertyList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(API.GET_HOTEL_COUNT + "?groupBy=type")
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch((err) => console.log(err));
  }, []);

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  return (
    <div className="pList">
      {items.map((item, index) => (
        <div className="pListItem" key={index}>
          <img src={images[index]} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>{item.name}</h1>
            <h2>{item.count} hotels</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
