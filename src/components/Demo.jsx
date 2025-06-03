import React from "react";


const Demo = () =>{
    // let marks = 50;

    const personInfo =['Mokaddes', 'isFileLoadingAllowed', 'Ali']
    return(
    <>
    {/* <h1>Your Result Test</h1>
   <div className="first" id="first"> */}
    {/* এটি হলো একটি ইমিডিয়েটলি ইনভোকড ফাংশন এক্সপ্রেশন (IIFE) */}
{/* {(()=>{
  // const myName= "Mokjaddes Ali";
  // return <h1>Hello, {myName}</h1>

  if(marks>80 && marks<100){
 return<h1>You are Talent with A+</h1>
  }
  else if(marks>=70 && marks<80){
    return<h1>A.</h1>
  }
   else if(marks>=60 && marks<70){
    return<h1>A-</h1>
  }
   else if(marks>=50 && marks<60){
    return<h1>B</h1>
  }
   else if(marks>=40 && marks<50){
    return<h1>C</h1>
  }
   else if(marks>=33 && marks<40){
    return<h1>D</h1>
  }
  else{
    return<h1>You are Faild</h1>
  }
})()}  */}
   
   {/* </div> */}

   {
    personInfo.map((item,i)=>{
      return<li key={i.toString()}>{item}</li>
    })
   }
    </>
    )
}

export default Demo;