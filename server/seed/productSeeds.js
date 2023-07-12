const names = [
    ["Cars","4"],
    ["Dinosaurs","4"],
["Flowers","5"],
["Anime","4"],
     ["Constellations","6"],
       ["Boats","6"],
       ["Buildings","4"],
       ["Animals","4"],
        ["Nature","4"],
        ["People","2"],
];

const getName = (idx) => {
    return(names[idx][0]);
}
const getCount = (idx) => {
    return(names[idx][1]);
}

module.exports={getName,getCount}
