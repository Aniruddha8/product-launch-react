import React from "react"
function Header(props){
    return(
        <header id="header">
		    <div class="logo">
			    <img src="https://s3.amazonaws.com/freecodecamp/original_trombones.png" class="header-img" alt="logo"/>
		    </div>
		    <div id="nav-bar">
			    <ul>
                    <li><a href={props.href1} class="nav-link">{props.link1}</a></li>
                    <li><a href={props.href2} class="nav-link">{props.link2}</a></li>
                    <li><a href={props.href3} class="nav-link">{props.link3}</a></li>
                </ul>
            </div>
        </header>
        
    )
}

export default Header