import React from 'react';

function FuncComp(props) {


    function myOnClick(e) {
        props.func('This is from my FuncComp.myOnClick');
    }

    return (
        <div>
            <h1>Hello, FuncComp {JSON.stringify(props)}</h1>
            <button onClick={myOnClick} >Push Me</button>
        </div>
    )

}

export default FuncComp;
