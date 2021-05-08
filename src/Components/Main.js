import React, { Component } from 'react'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import Header from './Header/Header'
import Orders from './Orders/Orders'
import Checkout from './Orders/Checkout/Checkout'
import Auth from './Auth/Auth'
import Logout from './Auth/Logout'

import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import { authCheck } from '../redux/authActionCreators'


const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}
class Main extends Component {
    componentDidMount() {
        this.props.authCheck()
    }

    render() {
        let roots = null
        if (this.props.token === null) {
            roots = (
                <Switch>
                    <Route path="/login" component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )
        } else {
            roots = (
                <Switch>
                    < Route path="/orders" component={Orders} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Route path="/logout" component={Logout} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <div>
                <Header />
                <div className="container">
                    {roots}
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)