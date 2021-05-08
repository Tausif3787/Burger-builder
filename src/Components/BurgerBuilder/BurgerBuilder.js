import React, { Component } from 'react'
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'
import Summary from './Summary/Summary'
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { addIngredient, removeIngredient, updatePurchasable } from '../../redux/actionCreaters'



const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (igtype) => dispatch(addIngredient(igtype)), //first te igtype catch korbe then oi dispatch addIngredient e send korbe oita ac hoye reducer e jabe
        removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
        updatePurchasable: () =>
            dispatch(updatePurchasable()),
    }
}

class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
    }

    addIngredientHandle = type => {
        this.props.addIngredient(type)
        this.props.updatePurchasable()

    }

    removeIngredientHandle = type => {
        this.props.removeIngredient(type)
        this.props.updatePurchasable()
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleCheckout = () => {
        this.props.history.push("/checkout")
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">  {/* eita dia jate choto boro te jhamela na hoye */}
                    <Burger ingredients={this.props.ingredients} />
                    <Controls
                        ingredientAdded={this.addIngredientHandle}//eitar por controls.js...oita buildcontrol e jabe...then jodi onClick call hoye then buildcontril er added call hobe then oita addIngredient e jabe
                        ingredientRemoved={this.removeIngredientHandle}
                        price={this.props.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.props.purchasable}
                    />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summery</ModalHeader>
                    <ModalBody>
                        <h5>Total Price:{this.props.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.props.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#D70F64" }} onClick={this.handleCheckout}>Continue to checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)