import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Discussion.module.css'; 
import { Link } from 'react-router-dom'; 
import CommentCard from './CommentCard';
import logo from '../assets/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Sample data for the comments
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
];

function DiscussionPage() {
  const [blogs, setBlogs] = useState(Blogs);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function postBlog() {
    
    if( inputRef.current.value.trim()===''){
        toast.error('Please enter a comment')
        return;
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const userName = 'Anonymous';
    const copyArr = [...blogs];
    copyArr.unshift({
      'name': userName,
      'comment': inputRef.current.value,
      'date': formattedDate
    });
    setBlogs(copyArr);
    inputRef.current.value = ''; 
  }

  return (
    <>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <div className={styles.problemList}>
            <Link to="/">Problem List</Link>
          </div>
        </div>
     
        <button className={styles.signInButton}>Sign In</button>
      </header>

      {/* Add New Comment */}
      <div className={styles.addBlog}>
        <textarea 
          name="Add Comment" 
          id="comment" 
          placeholder="Join the discussion..." 
          ref={inputRef} 
        />
        <button onClick={postBlog}>Post</button>
      </div>

      {/* Comments Section */}
      <div className={styles.commentSection}>
        {blogs.map((ele, idx) => (
          <CommentCard key={idx} data={ele} />
        ))}

      </div>
      <ToastContainer/>
    </>
  );
}

export default DiscussionPage;
