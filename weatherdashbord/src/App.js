
import './App.css';
import { Header } from './components/Header';
import {Hero} from './components/Hero'
import {Footer} from './components/Footer'
import {Modal} from './components/Modal'
import { Pets } from './components/Pets';
import { Gallary } from './components/Gallary';
// import { Cardssun } from './components/Cardssun';
import { CardssunList } from './components/CardsunList';
import { Indicator } from './components/Indicators';
// import { Indicator } from './components/Indicators';
// import Weather8Days from './components/Daysforecast';
// import { Daysforecast } from './components/Daysforecast';
import Daysforecast from './components/Daysforecast';
// import { Hourly } from './components/Hourly';

// import Hourly from './components/Hourly';
import { useEffect, useState } from 'react';

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const savedCities = JSON.parse(localStorage.getItem("cities")) || ["London"];
    const [cities, setCities] = useState(savedCities);


    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);


    useEffect(() => {
      localStorage.setItem("cities", JSON.stringify(cities));
    }, [cities]);


    function addCity(city){
      setCities(prev => [...prev, city])
    }

    function removeCity(cityToRemove) {
      setCities(prev => prev.filter(city => city !== cityToRemove));
    }


  return (
      <>
        <Header onClick={handleOpenModal} currentUser={currentUser}/>
        <Hero onSearch={addCity}/>
        <Modal
          isOpen={isOpen} 
          onClose={handleCloseModal}
          setCurrentUser={setCurrentUser}
        />
        <CardssunList 
          cities={cities} 
          onRemove={removeCity}
          onSelectCity={setSelectedCity}
          />

        {currentUser && selectedCity &&(
          <>
            <Indicator lat={selectedCity.lat} lon={selectedCity.lon}/>
            {/* <Hourly/> */}
            <Daysforecast lat={selectedCity.lat} lon={selectedCity.lon}/>
          </>
          )
        }
        
        
        <Pets/>
        <Gallary/>
        <Footer/>
      </>

  );
}

export default App;
