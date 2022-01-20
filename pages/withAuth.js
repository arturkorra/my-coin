import React from 'react';
import router from 'next/router';
import jwt_decode from "jwt-decode";

const withAuth = (Component) => {
return class extends React.Component {
constructor(props) {
super(props);
this.state = {
status: 'SIGNED_OUT',
}
}
componentDidMount() {
const token = window.localStorage.getItem('sessionToken');

if(token) {
const decodedToken = jwt_decode(token);
const valid = false;  
console.log("Decoded Token", decodedToken);
const currentDate = new Date();
 // JWT exp is in seconds
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    console.log("Token expired.");
  } else {
    console.log("Valid token");   
    valid = true;
  }
  if (valid) {
    this.setState({
        status: 'SIGNED_IN'
        });
  } else {
    router.push('/login');
  }
}else {
router.push('/login');
}

}
renderContent() {
const { status } = this.state;
if(status == 'SIGNED_OUT') {
return <h1>Redirect to login page!......</h1>;
}else if(status == 'SIGNED_IN') {
return <Component { ...this.props } />
}
}
render() {
return (
<React.Fragment>
{this.renderContent()}
</React.Fragment>
);
}
};
}
export default withAuth;