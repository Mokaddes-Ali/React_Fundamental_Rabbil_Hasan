import React from 'react'
const loginStatusButton=(status)=>{
    if(status){
        return<button> Logout Button</button>
    }
    else{
        return<button> Login Button</button>
    }
}

const Conditional = () => {

    return (
    <div>
        <p>Login Status</p>
        {loginStatusButton(false)}
    </div>
    );



}

export default Conditional;
