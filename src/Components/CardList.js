import React from "react";
import Card from "./Card";

const CardList = ({houses}) => {
    return(
        <>
            {
                houses.map((house,i) => {
                    return (<Card key={i} id={houses[i].id} name={houses[i].name} 
                            address={houses[i].email} email={houses[i].email}/>);
                })
            }
        </>
    );
}

export default CardList;