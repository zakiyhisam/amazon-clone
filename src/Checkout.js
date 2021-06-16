import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch ] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            <div>
                <h3>Hello, {user?.email.split("@")[0]}</h3>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                ) )}
            </div>
            </div>
            <div className="checkout_right">
                <h2>
                    <Subtotal />
                </h2>
            </div>

        </div>
    )
}

export default Checkout
