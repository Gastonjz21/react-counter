function Landing(props){

    function returnLastLetter(gender){
        if(gender==="M") return "o"
        else if(gender==="F") return "a"
        else return "x"
    }

    // eslint-disable-next-line no-unused-vars
    const lastLetter = returnLastLetter(props.userGender)

    return(
        <h1>Bienvenid{lastLetter} {props.userName} a mi pagina!</h1>
    )
};

export default Landing;