import React from "react"
import "./Button.css"
function Form(props){
    return(
        <div className="sec-container">
			<form id="form" onSubmit={props.handleSubmit}>
				<h2>Enter your name:</h2>
				<input type="text" name="name" id="email" placeholder="Enter your name" onChange={props.onChange} value={props.value} required />
				<button type="submit" id="submit">Submit</button>
				{props.visibility===true && <h2>Thank you for visiting {props.name}</h2>}
			</form>
		</div>
    )
}

export default Form