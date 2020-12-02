import React, {Component} from 'react';
import Header from "../Header/header";
import RabsShop from "../rabsShop/rabsShop";
import CarsShop from "../carsShop/carsShop";
import CitiesShop from "../citiesShop/citiesShop";

class App extends Component {

    rabsShop = [
        {name: 'Maksym', pass: '12345', phone: '0976322866', isMarried: true, car: false},
        {name: 'Alina', pass: '12345', phone: '0653405776', isMarried: true, car: true},
        {name: 'Tamara', pass: '12345', phone: '0632114955', isMarried: false, car: false},
        {name: 'Maksym', pass: '12345', phone: '0976322866', isMarried: true, car: false},
        {name: 'Ivan', pass: 'qwer1234', phone: '0967777777', isMarried: false, car: true},
        {name: 'Tamara', pass: '12345', phone: '0632114955', isMarried: false, car: false},
        {name: 'Maksym', pass: '12345', phone: '0976322866', isMarried: true, car: false},
        {name: 'Alina', pass: '12345', phone: '0653405776', isMarried: true, car: true}
    ];

    carsShop = [
        {model: 'bentli', madeYear: 2015, place: 'Kiev', power: 420},
        {model: 'tesla:', madeYear: 2020, place: 'Lviv', power: 355},
        {model: 'vaz', madeYear: 2010, place: 'Lviv', power: 212},
        {model: 'audi', madeYear: 2012, place: 'Lviv', power: 263},
        {model: 'niva', madeYear: 2005, place: 'Kiev', power: 200},
        {model: 'opel', madeYear: 2015, place: 'Kiev', power: 287},
        {model: 'zaz', madeYear: 2010, place: 'Lviv', power: 154},
        {model: 'Mitsubishi', madeYear: 2015, place: 'Lviv', power: 312},
        {model: 'alfraomeo', madeYear: 2018, place: 'Kiev', power: 385},
        {model: 'toyota', madeYear: 2003, place: 'Kiev', power: 208},
    ];

    citiesShop = [
        {population: 4000000, country: 'Ukraine', region: 'Kiev'},
        {population: 22000000, country: 'China', region: 'Perkin'},
        {population: 7000000, country: 'Italian', region: 'Rom'},
        {population: 6000000, country: 'Spain', region: 'Madrid'},
        {population: 15000000, country: 'India', region: 'Tunis'},
    ];

    render() {
        return (
            <div>
                {<Header/>}
                {<RabsShop shopItems={this.rabsShop}/>}
                {<CarsShop shopItems={this.carsShop}/>}
                {<CitiesShop shopItems={this.citiesShop}/>}
            </div>
        );
    }
}

export default App;