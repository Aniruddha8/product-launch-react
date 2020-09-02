import React from "react"
import "./Button.css"
function Video(props){
    return(
        <div id={props.linkId} class="sec-container">
			<iframe title="you tube" id="video" src={props.videolink} frameborder="0" allowfullscreen=""></iframe>
		</div>
    )
}
export default Video