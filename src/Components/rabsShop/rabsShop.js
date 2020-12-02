import React, {Component} from 'react';
import './rabsShop.css'
import RabsShopItem from "../rabsShopItem/rabsShopItem";

class RabsShop extends Component {
    render() {
        const {shopItems} = this.props;
        return (
            <div className='shopWrapper'>
                {<h2><b>Магазин рабів</b></h2>}
                {
                    <div className='flex'>
                        {
                            shopItems.map((item, index) => {
                                return <RabsShopItem rab={item} key={index}/>
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

export default RabsShop;