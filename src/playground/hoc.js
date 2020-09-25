//Higher Order Component (HOC) - a component (hoc) 
//renders another component(regular)

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);


//HOC:
//advantages: reuse code, render hijacking, prop manipulation, abstract state

//step1: create a function
//wrap component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is provate info. please don't share</p> }
            <WrappedComponent {...props} />
        </div>
    );
};



//requireAuthentication
const requireAuthentication = (WrappedComponent)=>{
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />
            ) : (<p>Please log in to view the info</p>)}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info = 'this is te detail' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info = 'this is te detail' />, document.getElementById('app'));