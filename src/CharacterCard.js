import React, { Component } from 'react';
export default class CharacterCard extends Component {
  render() {
    return <div className = "card">{this.props.value}</div>;
  }

    constructor(props){ 
        super(props) 
        this.state = { active: false, } 
    } 

    activate = () => {
        if(!this.state.active){
            this.setState({active: true}) } 
    }

    render(){ let className = `card ${this.state.active ? 'activeCard': ''}` 
        return ( 
            <div className={className} onClick={this.activate}> 
                {this.props.value} 
            </div> 
        ) 
    } 
}