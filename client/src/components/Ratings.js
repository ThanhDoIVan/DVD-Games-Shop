import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../index";


const Ratings = observer(() => {

    const rates = [1, 2, 3, 4, 5];
    const [rating, setRating] = useState(0);
    const user = useContext(Context);

    const click = (rate) => {
        console.log(user);
        setRating(rate);
    }

    return (
        <div className="ratings">
            {rates.map( (rate, index) => 
                <div key={index} 
                className={rating === rate ? 'rating rating-active' : 'rating'}
                onClick={ () => click(rate)}>
                    {rate}
                </div>
            )}
        </div>
    );
});

export default Ratings;