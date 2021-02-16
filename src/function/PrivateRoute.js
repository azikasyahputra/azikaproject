import { useState, useEffect } from 'react';
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "./useAuth";


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route {...rest}
    render={(props) => {
        return isLogin() ? <Component {...props} /> : <Redirect to="/" />
    }} />)
}

export default PrivateRoute;