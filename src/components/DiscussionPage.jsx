import React, { useEffect } from 'react'
import styles from '../styles/Discussion.module.css' ;
import CommentCard from './CommentCard';
import { useRef,useState } from 'react';

const Blogs = [
    { 'name': 'John Doe', 'comment': 'Nice solution! I think this is an optimal approach.', 'date': '20/10/2024' },
    { 'name': 'Jane Smith', 'comment': 'This approach seems a bit complicated. Can someone explain it in simpler terms?', 'date': '20/10/2024' },
    { 'name': 'Alice Cooper', 'comment': 'Can anyone explain why this approach works?', 'date': '20/10/23' },
    { 'name': 'Bob Marley', 'comment': 'This works because it reduces the complexity from O(n^2) to O(n log n).', 'date': '20/10/2023' },
    { 'name': 'Charlie Brown', 'comment': 'I tried this solution but encountered a runtime error for larger inputs.', 'date': '20/10/26023' },
    { 'name': 'Eve Johnson', 'comment': 'Is this solution valid for all edge cases, especially with negative numbers?', 'date': '20/10/2024' },
    { 'name': 'Dave Lee', 'comment': 'Thanks for sharing! This helped me improve my understanding of the problem.', 'date': '20/10/2024' },
    { 'name': 'Mia Wallace', 'comment': 'I don\'t understand how the binary search part works. Can anyone clarify?', 'date': '20/10/2024' },
    { 'name': 'Oscar Wilde', 'comment': 'Great explanation, but I think you can optimize this further by removing some redundant checks.', 'date': '20/10/2024' },
    { 'name': 'Liam Neeson', 'comment': 'I am still stuck on the second part of the problem. Can someone help me out?', 'date': '20/10/2022' }
  ]

function DiscussionPage() {

const [blogs,setBlogs] = useState(Blogs);
console.log(blogs);
  
const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus();
},[])

function postBlog(){

    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const userName = 'Anonymous' ;
    const copyArr = [...blogs] 
    copyArr.unshift({
        'name': userName,
        'comment': inputRef.current.value,
        'date' : formattedDate
    })
    setBlogs(copyArr);
    inputRef.current.value = '';
}

  return (
<>
  
   <div className={styles.addBlog}>
       <textarea 
       name="Add Comment" id="" 
       placeholder='Join the discussion'
       ref={inputRef}
>
        
       </textarea>
       <button style={{color:'#fff',border:'1px solid #fff'}} onClick={postBlog}>Post</button>
      
   </div >
      
   <div style={{display:'flex',flexDirection:'column', gap:'20px'}}  className={styles.commentSection}>
    {
        blogs.map((ele,idx)=>{
            return(
             
                 <CommentCard key={idx} data = {ele}  />
             
            )
        })
    }

   </div>
</>
  )
}

export default DiscussionPage