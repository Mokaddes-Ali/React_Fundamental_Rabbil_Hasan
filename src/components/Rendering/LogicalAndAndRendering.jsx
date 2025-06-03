import React from 'react'

// single condition check kre jkhon output dekhabo tkhon amader and and operator use krte hbe
const LogicalAndAndRendering = () => {
    const status = false;
  return (
    <div>
        <h1>Login status</h1>
        {
            status && <button>Logout Button</button>
        }      
    </div>
  )
}

export default LogicalAndAndRendering
