import React from 'react'

const TernaryOperator = () => {
    const status = false;
  return (
    <div>
        {
            status == true?<button> Logout Button</button>
            :<button> Login Button</button>

        }
      
    </div>
  )
}

export default TernaryOperator
