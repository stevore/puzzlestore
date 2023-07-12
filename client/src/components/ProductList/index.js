import React from 'react';

import buildings1 from "./../../assets/images/puzzles/buildings/puzzle11.48.50 AM.png";
 import buildings2 from "./../../assets/images/puzzles/buildings/puzzle11.52.45 AM.png";
 import buildings3 from "./../../assets/images/puzzles/buildings/puzzle11.51.52 AM.png";
 import buildings4 from "./../../assets/images/puzzles/buildings/puzzle11.49.18 AM.png";

 import constellations1 from "./../../assets/images/puzzles/constellations/puzzle11.45.40 AM.png";
 import constellations2 from "./../../assets/images/puzzles/constellations/puzzle11.46.35 AM.png";
 import constellations3 from "./../../assets/images/puzzles/constellations/puzzle11.45.20 AM.png";
 import constellations4 from "./../../assets/images/puzzles/constellations/puzzle11.45.06 AM.png";
 import constellations5 from "./../../assets/images/puzzles/constellations/puzzle11.44.51 AM.png";
 import constellations6 from "./../../assets/images/puzzles/constellations/puzzle11.46.19 AM.png";

 import boats1 from "./../../assets/images/puzzles/boats/puzzle10.52.38 AM.png";
 import boats2 from "./../../assets/images/puzzles/boats/puzzle10.50.50 AM.png";
 import boats3 from "./../../assets/images/puzzles/boats/puzzle10.50.00 AM.png";
 import boats4 from "./../../assets/images/puzzles/boats/puzzle10.51.41 AM.png";
 import boats5 from "./../../assets/images/puzzles/boats/puzzle10.51.12 AM.png";
 import boats6 from "./../../assets/images/puzzles/boats/puzzle10.50.30 AM.png";

 import flowers1 from "./../../assets/images/puzzles/flowers/puzzle10.48.27 AM.png";
 import flowers2 from "./../../assets/images/puzzles/flowers/puzzle10.47.17 AM.png";
 import flowers3 from "./../../assets/images/puzzles/flowers/puzzle10.41.56 AM.png";
 import flowers4 from "./../../assets/images/puzzles/flowers/puzzle10.43.36 AM.png";
 import flowers5 from "./../../assets/images/puzzles/flowers/puzzle10.42.30 AM.png";

 import nature1 from "./../../assets/images/puzzles/nature/puzzle10.44.40 AM.png";
 import nature2 from "./../../assets/images/puzzles/nature/puzzle10.44.09 AM.png";
 import nature3 from "./../../assets/images/puzzles/nature/puzzle11.58.40 AM.png";
 import nature4 from "./../../assets/images/puzzles/nature/puzzle11.57.36 AM.png";
 
 import animals1 from "./../../assets/images/puzzles/animals/puzzle11.54.28 AM.png";
 import animals2 from "./../../assets/images/puzzles/animals/puzzle11.55.53 AM.png";
 import animals3 from "./../../assets/images/puzzles/animals/puzzle11.56.27 AM.png";
 import animals4 from "./../../assets/images/puzzles/animals/puzzle11.54.56 AM.png";

 import people1 from "./../../assets/images/puzzles/people/puzzle12.01.19 PM.png";
 import people2 from "./../../assets/images/puzzles/people/puzzle11.59.50 AM.png";

 import cars1 from "./../../assets/images/puzzles/cars/puzzle9.46.27 AM.png";
 import cars2 from "./../../assets/images/puzzles/cars/puzzle9.46.50 AM.png";
 import cars3 from "./../../assets/images/puzzles/cars/puzzle9.43.49 AM.png";
 import cars4 from "./../../assets/images/puzzles/cars/puzzle9.45.07 AM.png";
 import cars5 from "./../../assets/images/puzzles/cars/puzzle9.44.50 AM.png";

 import anime1 from "./../../assets/images/puzzles/anime/puzzle11.43.09 AM.png";
 import anime2 from "./../../assets/images/puzzles/anime/puzzle11.43.46 AM.png";
 import anime3 from "./../../assets/images/puzzles/anime/puzzle11.42.51 AM.png";
 import anime4 from "./../../assets/images/puzzles/anime/puzzle11.43.34 AM.png";

 import dinosaurs1 from "./../../assets/images/puzzles/dinosaurs/puzzle10.54.16 AM.png";
 import dinosaurs2 from "./../../assets/images/puzzles/dinosaurs/puzzle11.18.37 AM.png";
 import dinosaurs3 from "./../../assets/images/puzzles/dinosaurs/puzzle11.00.49 AM.png";
 import dinosaurs4 from "./../../assets/images/puzzles/dinosaurs/puzzle10.57.18 AM.png";
 import dinosaurs5 from "./../../assets/images/puzzles/dinosaurs/puzzle10.57.02 AM.png";
 import dinosaurs6 from "./../../assets/images/puzzles/dinosaurs/puzzle10.53.56 AM.png";

const ProductList = ({ products, name }) => {
  try {
  console.log(products);
  if (!products.length) {
    return <h3>Products out of stock.</h3>;
  }
} catch (error){
  console.log("err ",error)
}

const getURL=(name) =>{
  switch(name){
    case "Cars1":
      return(cars1);
      case "Cars2":
        return(cars2);
        case "Cars3":
          return(cars3);
          case "Cars4":
            return(cars4);
            case "Cars5":
              return(cars5);
    case "Dinosaurs1":
      return(dinosaurs1);
      case "Dinosaurs2":
        return(dinosaurs2);
        case "Dinosaurs3":
          return(dinosaurs3);
          case "Dinosaurs4":
            return(dinosaurs4);
            case "Dinosaurs5":
              return(dinosaurs5);
              case "Dinosaurs6":
                return(dinosaurs6);
      
    case "Flowers1":
      return(flowers1);
      case "Flowers2":
        return(flowers2);
        case "Flowers3":
          return(flowers3);
          case "Flowers4":
            return(flowers4);
            case "Flowers5":
              return(flowers5);
    case "Anime1":
      return(anime1);
      case "Anime2":
      return(anime2);
      case "Anime3":
      return(anime3);
      case "Anime4":
      return(anime4);
    case "Constellations1":
        return(constellations1);
        case "Constellations2":
        return(constellations2);
        case "Constellations3":
        return(constellations3);
        case "Constellations4":
        return(constellations4);
        case "Constellations5":
        return(constellations5);
        case "Constellations6":
          return(constellations6);
        
    case "Boats1":
        return(boats1);
        case "Boats2":
          return(boats2);
          case "Boats3":
            return(boats3);
            case "Boats4":
              return(boats4);
              case "Boats5":
                return(boats5);
                case "Boats6":
                  return(boats6);
    case "Buildings1":
        return(buildings1);
        case "Buildings2":
          return(buildings2);
          case "Buildings3":
            return(buildings3);
            case "Buildings4":
              return(buildings4);

    case "Animals1":
        return(animals1);
        case "Animals2":
          return(animals2);
          case "Animals3":
            return(animals3);
            case "Animals4":
              return(animals4);
    case "Nature1":
        return(nature1);
        case "nature2":
          return(nature2);
          case "Nature3":
            return(nature3);
            case "Nature4":
              return(nature4);
    case "People1":
        return(people1);
        case "People2":
          return(people2);


    default:
    return("");
  }
  }
  return (
    <div>
      <h3>{name}</h3>
      {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {product.name} <br />
            </h4>
            <div className="card-body bg-light p-2">
              <p>{product.name}</p>
            </div>
            <img src={getURL(product.name)} alt="Category"></img>
          </div>
        ))}
    </div>
  );
};

export default ProductList;