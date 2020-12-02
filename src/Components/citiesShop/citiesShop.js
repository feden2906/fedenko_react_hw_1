import React, {Component} from 'react';
import './citiesShop.css'
import CitiesShopItem from "../citiesShopItem/citiesShopItem";

class CitiesShop extends Component {
    render() {
        const {shopItems} = this.props

        return (
            <div className='shopWrapperCity'>
                {<h2><b>Магазин міст</b></h2>}
                {
                    <div className='flexCity'>
                        {
                            shopItems.map((value, index) => {
                                return <CitiesShopItem city={value} num={index} key={index}/>
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default CitiesShop;