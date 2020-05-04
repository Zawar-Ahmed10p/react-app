import React from 'react'
import classes from './Order.module.css'
const order =(props)=>{
    const ingredients=[];
    for (let ingredientsName in props.ingredients){
        ingredients.push({name:ingredientsName,amount:props.ingredients[ingredientsName]})
    }
    const ingredientOutput=ingredients.map(ig=>{
        return <span 
                    style={{textTransform:"capitalize",
                        display:"inline-block",
                        margin:'0 8px',
                        border:'1px solid #ccc',
                        padding:'5px'}}
                    key={ig.name}>
                        {ig.name} 
                        ({ig.ampunt})
                </span>;
    })
    return(
            <div className={classes.Order}>
                <p>Ingredients: {ingredientOutput}</p>
                <p>Price: <strong>PKR {props.price}</strong></p>
            </div>
        );
    }
    


export default order