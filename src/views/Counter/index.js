import {useState} from 'react';
import Number from'./components/Number';
import Button from './components/Button';


function Counter(){
    const [count, setCount] = useState(0)

    function handleAdd(event){
        setCount(count+1)
    }

    function handleSubstract(event){
        setCount(count-1)
    }

    return (
        <section>
            <Button buttonText={"+"} handleClick={handleAdd}/>
            <Number number={count}/>
            <Button buttonText={"-"} handleClick={handleSubstract}/>
        </section>
    )
};

export default Counter;