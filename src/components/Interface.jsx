import React from 'react'

function Interface() {
  return (
    <div className='interfaceContainer' style={{display:'flex',width:'100%',height:'100vh' ,justifyContent:'space-around'}}>
      
      <div className="leftInt" style={{width:'40%'}}>
         <h2>2Sum</h2> 
         <span style={{color:'green'}} >Easy</span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur sit doloremque dicta corporis temporibus iste dolor, exercitationem rem nemo maxime expedita labore magnam? Ipsum, vel! Aspernatur unde explicabo mollitia quo eos repudiandae ex!</p>
         <div className='eg'>
            <p>Example 1:</p>
             <p>Input : nums = [2,7,11,15], target = 9</p>
             <p>Output : [0,1]</p>
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
                <button>Case 0</button>
                <button>Case 1</button>
                <button>Case 2</button>
              </div>
              <div className="inout">
                  <p>nums = [2,4,5,6] , target = 3</p>
                  <p>[0,1]</p>
              </div>
              
         </div>
      </div>


    </div>
  )
}

export default Interface ;