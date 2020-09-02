import React from "react"
import "./Button.css"
class ThemeChanger extends React.Component{
    render(){
        return(
                <button style={{backgroundColor:this.props.color}} name={this.props.color} onClick={this.props.handleClick}></button>
        )
    }
}
export default ThemeChanger