import React from 'react'
// import {withRouter} from 'react-router-dom';
import classes from './Burger.module.css'
import  BurgerIngredient from './Burgeringredient/Burgeringredient'
const burger = (props)=>{
    let tranformedIngredient=Object.keys(props.ingredients)
        .map(igKey=>{
            return[...Array(props.ingredients[igKey])]
                .map((_,i)=>{
                return <BurgerIngredient key={igKey+i} type={igKey}/>
                });
        })
        .reduce((arr,el)=>{
            return arr.concat(el);
        },[]);
        if(tranformedIngredient.length===0){
            tranformedIngredient=<p>Please start adding ingredients</p>
        }
    console.log(tranformedIngredient);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {tranformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;