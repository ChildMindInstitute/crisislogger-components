import React from 'react'
import { Route as R, Redirect as RD } from 'react-router-dom'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <R
        {...rest}
        render={props =>
            localStorage.getItem('token') ?
            (<Component {...props} />):
            (<RD to='/login' />)
        }
    />
)
export default PrivateRoute