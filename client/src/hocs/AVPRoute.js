import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// Account Vs Profile Route redirects to account if user authenticated
const AVPRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user } = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            if(user?.address === props.match.params.address && isAuthenticated)
                return <Redirect to={{ pathname: '/account', 
                                       state : {from : props.location}}}/>
    
            return <Component {...props}/>
        }}/>
    )
}

export default AVPRoute;