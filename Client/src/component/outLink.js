//var myWindow=window.open("http://localhost:3000/");
import React,{Component} from 'react';
var myWindow;

class OutLink extends Component{

    componentWillMount() {
        window.location="http://localhost:3000/#/Home/Preview/newtest"

 }

    render(){

        return(
              <h1>Redirecting to your page</h1>
              );
    }

}
export default OutLink;
