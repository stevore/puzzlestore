import React from 'react';

  import Dinosaurs from "./../../assets/images/puzzles/dinosaurs/puzzle10.53.56 AM.png";
  import Flowers from "./../../assets/images/puzzles/flowers/puzzle10.41.56 AM.png";
  import Anime from "./../../assets/images/puzzles/anime/puzzle11.43.09 AM.png";
  import Constellations from "./../../assets/images/puzzles/constellations/puzzle11.45.20 AM.png";
  import Boats from './../../assets/images/puzzles/boats/puzzle10.50.00 AM.png';
  import Buildings from "./../../assets/images/puzzles/buildings/puzzle11.48.50 AM.png";
  import Animals from "./../../assets/images/puzzles/animals/puzzle11.54.28 AM.png";
  import Nature from "./../../assets/images/puzzles/nature/puzzle11.57.36 AM.png";
  import People from "./../../assets/images/puzzles/people/puzzle11.59.50 AM.png";
  import car from "./../../assets/images/puzzles/cars/puzzle9.43.49 AM.png"        

const CategoryList = ({ categorys, name }) => {
  try {
    console.log(categorys);
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
    <div className="container">
{categorys &&
  categorys.map((category) => (
    <div key={category._id} className="card">
      <div className="card-header">
      <p>{category.name}</p>
      </div>
      <div className="card-body">
       <img src={getURL(category.name)} alt="Category" className="img-fluid"></img>   
      </div>
      <div className="card-footer">

      </div>
      </div>
  ))}
  </div>
 
  );
};
export default CategoryList;