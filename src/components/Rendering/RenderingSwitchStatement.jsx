import React from 'react'

const RenderingSwitchStatement = () => {

    const status= false;

    switch(status){
        case true:
           return <button> Logout Button</button>

        case false:
           return <button> login Button</button>

        default:
            return <h1>No Result</h1>
    }
}

export default RenderingSwitchStatement
