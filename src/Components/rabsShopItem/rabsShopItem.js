import React, {Component} from 'react';
import './rabsShopItem.css'

class RabsShopItem extends Component {
    render() {
        const {rab: {name, pass, phone, isMarried, car}} = this.props;
        return (
            <div className='item'>
                {<h3>Раб <b>{name}</b></h3>}
                {<h4>Пароль від VK - {pass}</h4>}
                {<h4>Телефон - {phone}</h4>}
                {<h4>{isMarried}</h4>}
                {<h4>Наявність авто - {car.toString()}</h4>}
            </div>
        );
    }
}

export default RabsShopItem;