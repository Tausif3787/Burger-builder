import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="mr-auto ml-5" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{props.label}</div>
            <button className="btn btn-danger btn-sm m-1" onClick={props.removed}>Less</button>
            <button className="btn btn-success btn-sm m-1" onClick={props.added}>More</button>
        </div>
    )
}

const Controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: "center" }}>
            <Card style={{ marginTop: "30px", marginBottom: "30px", textAlign: "center" }}>
                <CardHeader style={{ backgroundColor: "#D70F64", color: "white" }}>
                    <h4>Add Incredients</h4>
                </CardHeader>
                <CardBody>
                    {
                        controls.map(item => {  // state hole this.state.controls dite hoto but eita only const e ase so direct call korle hobe
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={Math.random()}
                                added={() => props.ingredientAdded(item.type)} //binding watch vdo 6 and eita burgerbuilder e addIngredientHandle e jabe
                                removed={() => props.ingredientRemoved(item.type)}
                            />
                        })
                    }
                </CardBody>
                <CardFooter><h5>Price: <strong>{props.price}</strong> BDT</h5></CardFooter>
                <Button disabled={!props.purchasable} style={{ backgroundColor: "#D70F64" }} onClick={props.toggleModal}>Order Now</Button>
            </Card>
        </div>)
}

export default Controls