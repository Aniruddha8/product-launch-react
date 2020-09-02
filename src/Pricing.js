import React from "react"
import "./Button.css"
function Pricing(props){
    return(
        <div id={props.linkId} className="sec-container" data-aos="flip-right">
        <div id="product-1" style={props.style1}>
            <div className="top-bar" style={props.style2}> Product 1</div>
            <p>Lorem ipsum dolor sit amet, per oratio scaevola honestatis ut, ea errem vocent dolorem eam. Ut tollit ponderum maluisset eos, mei partem copiosae deserunt at, congue repudiandae instructior et cum.</p>
        </div>
        <div id="product-2" style={props.style1}>
            <div className="top-bar" style={props.style2}>Product 2</div>
            <p>Lorem ipsum dolor sit amet, per oratio scaevola honestatis ut, ea errem vocent dolorem eam. Ut tollit ponderum maluisset eos, mei partem copiosae deserunt at, congue repudiandae instructior et cum.</p>
        </div>
        <div id="product-3" style={props.style1}>
            <div className="top-bar" style={props.style2}>Product 3</div>
            <p>Lorem ipsum dolor sit amet, per oratio scaevola honestatis ut, ea errem vocent dolorem eam. Ut tollit ponderum maluisset eos, mei partem copiosae deserunt at, congue repudiandae instructior et cum.</p>
        </div>
    </div>
    )
}

export default Pricing