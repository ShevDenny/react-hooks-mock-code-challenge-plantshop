import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantInfo => setPlants(plantInfo))
  }, [])

  function addPlant (newPlant) {
    let newPlantArray = [...plants, newPlant]
    setPlants(newPlantArray)
  }
  function removePlant(id){
    const plantArray = plants.filter(plant => plant.id !== id);
    setPlants(plantArray)    
  }

  const filteredList = plants.filter(plant => {
    return (plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  })


  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <PlantList plants={filteredList} removePlant={removePlant} />
    </main>
  );
}

export default PlantPage;
