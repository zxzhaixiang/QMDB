import React, { Component } from "react";
import {Label, Input} from "reactstrap"

class SearchSimple extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: ""
        } 
    }

    render(){
        return (
            <div>
                <Label for="searchbox">Keywords/Title</Label>
                <Input type="text" name="search" id="search" placeholder="Search title/keywords" />
            </div>
        )
    }
  }
  
  export default SearchSimple;
