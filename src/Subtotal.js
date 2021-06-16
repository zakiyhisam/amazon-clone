import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    // var price = 0;
    // const totalprice = (({basket}) => {
    //     for (let i=0; i< (basket?.length); i++){
    //         price += basket[i].item.price;
    //     }
    //     return price;
    // })
    // let totalPrice = 0;
    // basket.forEach((item) => {
    //     totalPrice += item.price;
    // })

    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ( {basket?.length} items): 

                        <strong>
                             {value}
                        </strong>  
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This Order Contain a Gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
