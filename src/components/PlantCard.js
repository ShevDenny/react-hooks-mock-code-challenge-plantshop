import React, {useState} from "react";

function PlantCard({plant, removePlant}) {
  const {id, name, image ="https://via.placeholder.com/400", price} = plant
  const [outOfStock, setOutOfStock] = useState(true)

  function handleStock(){
    setOutOfStock(outOfStock => !outOfStock)
  }

  function handleRemove() {
    fetch(`http://localhost:6001/plants/${id}`, {
  method: 'DELETE',
  });
  removePlant(id);
  }

  function updatePrice(){
      fetch(`http://localhost:6001/plants/${id}`, {
          method: 'PATCH',

          headers: {
          "Content-type": "application/json"
          },         
           body: JSON.stringify({price:price}),
          })
          .then(response => response.json())
          .then(json => console.log(json))
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      
        <button 
          onClick={handleStock} 
          className={outOfStock ? "primary" : ""}>{outOfStock ? "In Stock" : "Out of Stock"}
        </button>
        <button
          onClick={handleRemove}>Remove Plant
        </button>

      
      
    </li>
  );
}

export default PlantCard;
