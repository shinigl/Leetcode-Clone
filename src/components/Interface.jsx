import React, { useContext } from 'react'
import { myContext } from '../main';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function Interface() {

const [btn1,setBtn1] = useState(false) ;
const [btn2,setBtn2] = useState(false) ;
const [btn3,setBtn3] = useState(false) ;




function btn1Click(){
  
    if(!btn1){
        setBtn1(true);
        setBtn2(false);
        setBtn3(false);
    }
}
function btn2Click(){
  
    if(!btn2){
        setBtn1(false);
        setBtn2(true);
        setBtn3(false);
    }
}
function btn3Click(){
  
    if(!btn3){
        setBtn1(false);
        setBtn2(false);
        setBtn3(true);
    }
}



const {id,name} = useParams() ;    

const ctx = useContext(myContext);

const prob = ctx.find((ele)=> ele.Sr === parseInt(id)) //filtered problem
console.log(prob);



  return (
    <div className='interfaceContainer' style={{display:'flex',width:'100%',height:'100vh' ,justifyContent:'space-around'}}>
      
      <div className="leftInt" style={{width:'40%'}}>
         <h2>{prob.Title}</h2> 
         <span style={{color:'green'}} >{prob.Difficulty}</span>
         <p>{prob.description}</p>
         <div className='eg'>
            {
                prob.example.map((ele,idx)=>{
                    return(
                        <div key={idx}>
                    
                          <p>Example : {idx}</p>
                          <p>Input : {ele.Input}</p>
                          <p>Output : {ele.Output}</p>
                        </div>
                    )
                })
            }
         </div>
         <div className="constraints">
            <p>Constraints:</p>
            <p>{`2 <= nums.length <= 104`}</p>
         </div>
      </div>
      <div className="rightInt" style={{width:'55%'  }}>
         
         <div className="codeArea">
            <textarea style={{width:'100%',minHeight:'60vh'}} name="" id="" placeholder='function TwoSum(nums,target){}'></textarea>

         </div>
         
         <div className='testCase'>
              <h3>Testcase</h3>
              <div className="cases">
                <button onClick={btn1Click}>Case 0</button>
                <button onClick={btn2Click} >Case 1</button>
                <button onClick={btn3Click} >Case 2</button>
              </div>
              <div className="inout">
                {
                    btn1 ? (
                        <>
                          <p>{prob.example[0].Input}</p>
                
                        </>
                    ) : btn2 ? (
                        <>
                        <h1>Bye</h1>
                        </>
                    ) : btn3 ? (
                        <>
                        <h1>Bye bye</h1>
                        </>
                    ) : (  prob.example[0].Input  )

}
              </div>
              
         </div>
      </div>


    </div>
  )
}

export default Interface ;