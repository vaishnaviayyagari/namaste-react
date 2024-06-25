import React from "react";
import { Component } from "react";

class UserClass extends Component {
    constructor(props){
        super(props);
        console.log(this.props.name+"Child constructor called");
        this.state = {
            userInfo:{
                name:"Dummy name",
                location:"Default"
            }
        }
        }

    async componentDidMount(){
        //console.log(this.props.name+"Child component Did mount");
        const data= await fetch("https://api.github.com/users/vaishnaviayyagari");
        const json = await data.json();
        this.setState({userInfo:json})
        console.log(json);
    }
    render() {
        const {name, location,avatar_url} = this.state.userInfo;
        //console.log(this.props.name+"Child render")
        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: vaishu@gmail.com</h4>
            </div>
        ) 
    }
}
export default UserClass;