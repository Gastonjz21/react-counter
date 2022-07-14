import './Button.css';

function Button(props){
    return(
        <button onClick={props.handleClick}  className="App-Button">
            {props.buttonText}
        </button>
    )
}

export default Button;