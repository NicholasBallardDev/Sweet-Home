import React from "react";

const Card = ({id, name, address}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt="Houses" width='200px' height='200px' 
            src={require(`../images/img-${id-1}.jpg`)}/>
            <>
                <h2>{name}</h2>
                <p>{address}</p>
            </>
        </div>
    )
}

export default Card;