import React, {Component} from 'react';
import './carsShop.css'
import CarsShopItem from "../carsShopItem/carsShopItem";


class CarsShop extends Component {
    render() {
        const {shopItems} = this.props;

        return (
            <div className='shopWrapperCar'>
                {<h2><b>Магазин рабів</b></h2>}
                {
                    <div className='flexCar'>
                        {
                            shopItems.map((value, index) => {
                                return <CarsShopItem car={value} key={index}/>
                            })
                        }
                    </div>
                }


            </div>
        );
    }
}

export default CarsShop;