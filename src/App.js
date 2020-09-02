import React from "react"
import ThemeChanger from "./ThemeChanger"
import Pricing from "./Pricing"
import Video from "./Video"
import "./Button.css"
import Header from "./Header"
import Features from "./Features"
import Form from "./Form"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:"#F0FFFF",
            content:{backgroundColor: "#00CED1",
                textAlign: "center",color: "white",
                fontSize: "18px"},
            top_bar:{backgroundColor: "#008B8B",
            fontSize: "24px"},
            name:"",
            submit:"",
            visibility:false
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleClick(event){
        this.setState({
            color:event.target.name
        })
        {event.target.name ==="#F0FFFF" ? this.setState({
            content:{backgroundColor: "#00CED1",
            textAlign: "center",color: "white",
            fontSize: "18px"},
            top_bar:{backgroundColor:"#008B8B",fontSize:"24px",color:"white"}}) : event.target.name ==="pink" ? this.setState({
                content:{backgroundColor: "thistle",
                textAlign: "center",color: "black",
                fontSize: "18px"},
                top_bar:{backgroundColor:"purple",fontSize:"24px",color:"white"}}) : this.setState({
                    content:{backgroundColor: "#DEB887",
                    textAlign: "center",color: "black",
                    fontSize: "18px"},
                    top_bar:{backgroundColor:"SandyBrown",fontSize:"24px",color:"white"}})}}
    handleChange(event){
        this.setState({
            name:event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
          submit:this.state.name,
          visibility:true
        });
      }
    render(){
        return(
            <main style={{backgroundColor:this.state.color,height:"100%"}}>
                <Header link1="Features" link2="About" link3="Pricing" href1="#features" href2="#about" href3="#pricing"/>
                    <br/><br/><br/><br/>
                    <div id="container">
                        <Features linkId="feature" />
                        <Video videolink="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0" linkId="about" />
                        <br/><br/><br/>
                        <Pricing style1={this.state.content} style2={this.state.top_bar} linkId="pricing"/>
                        <br/><br/><br/>
                        <Form name={this.state.submit} onChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.name} visibility={this.state.visibility}/>
                        <footer>
                            <div className="button_container">
                                <p id="theme">Choose the Theme</p>
                                <ThemeChanger color="#F0FFFF" handleClick={this.handleClick} />
                                <ThemeChanger color="pink" handleClick={this.handleClick}/>
                                <ThemeChanger color="beige" handleClick={this.handleClick}/>
                            </div>
                        </footer>
                    </div>
            </main>
        )
    }
}
export default App