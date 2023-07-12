import React from 'react';
import { Link } from 'react-router-dom';
  import Dinosaurs from "./../../assets/images/puzzles/dinosaurs/puzzle10.53.56 AM.png";
  import Flowers from "./../../assets/images/puzzles/flowers/puzzle10.41.56 AM.png";
  import Anime from "./../../assets/images/puzzles/anime/puzzle11.43.09 AM.png";
  import Constellations from "./../../assets/images/puzzles/constellations/puzzle11.45.20 AM.png";
  import Boats from './../../assets/images/puzzles/boats/puzzle10.50.00 AM.png';
  import Buildings from "./../../assets/images/puzzles/buildings/puzzle11.48.50 AM.png";
  import Animals from "./../../assets/images/puzzles/animals/puzzle11.54.28 AM.png";
  import Nature from "./../../assets/images/puzzles/nature/puzzle11.57.36 AM.png";
  import People from "./../../assets/images/puzzles/people/puzzle11.59.50 AM.png";
  import car from "./../../assets/images/puzzles/cars/puzzle9.44.50 AM.png"        

const CategoryList = ({ categorys, name }) => {
  try {
    if (!categorys.length) {
      return <h3>Products out of stock.</h3>;
    }
  } catch (error){
    console.log("err ",error)
  }
 
 const getURL=(name) =>{
  switch(name){
    case "Cars":
      return(car);
    case "Dinosaurs":
      return(Dinosaurs);
    case "Flowers":
      return(Flowers);
    case "Anime":
      return(Anime);
    case "Constellations":
        return(Constellations);
    case "Boats":
        return(Boats);
    case "Buildings":
        return(Buildings);
    case "Animals":
        return(Animals);
    case "Nature":
        return(Nature);
    case "People":
        return(People);

    default:
    return("");
    
  }
 }
  return (
    <div>
    <h2>Select a puzzle category</h2>
    <div className="container-fluid  flex-row">

{categorys &&
  categorys.map((category) => (
    <Link className="" to={`/products:${category._id}`}>
   
    <div key={category._id} className="puzzlecard flex-column">
      <div className="puzzleCard-header">
      <p>{category.name}</p>
      </div>
      <div className="puzzleCard-body category-img" >
       <img src={getURL(category.image)} alt="Category" className={category.name}></img>   
      </div>
      <div className="puzzleCard-footer">
      </div>
      </div>
      </Link>
  ))}
  </div>
  </div>
 
  );
};
export default CategoryList;