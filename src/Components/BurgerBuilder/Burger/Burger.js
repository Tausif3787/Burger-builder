import React from 'react'
import './Burger.css'
import Ingredient from '../Ingredient/Ingredient'

const Burger = props => {
    //console.log(props);
    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()]; //Array hocce js array create korar technics... Array(6) mane 6 member er array and ekta key provide korte hobe
        return amountArr.map(_ => { //er lengh use kora hoccce tai _ disi
            return <Ingredient type={item.type} key={Math.random()} /> //list create er jonno key use kora hocce
        })
    })
        //watch vdo 4 to reduce seperate array to one array
        .reduce((arr, element) => { //1st time run hole element e 1st array ashbe, 2nd time e element e 2md array ashbe..nd arr dia sob gula re ek place e nibe
            return arr.concat(element)// concat ei kaaj ta kortase
        }, [])// 1st time er khetre arr e empty ta jabe...pore concat hoye add hoye jabe

    if (ingredientArr.length === 0) {
        ingredientArr = <p>Please add some ingredients!</p>
    }

    return (
        <div className="Burger">
            <Ingredient type="bread-top" />
            {ingredientArr}
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger