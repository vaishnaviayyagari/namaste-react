import User from "./User";
import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }
    componentDidMount(){
        //console.log("Parent component did mount")
    }
    render() {
        //console.log("Parent component rendered")
        return(
            <div>
                <h1>Component Rendered</h1>
                <h2>About class component</h2>
                <UserClass name={"Vaishu (classes)"} location={"Bangalore class"}/>
            </div>
        )
    }
}
export default About;