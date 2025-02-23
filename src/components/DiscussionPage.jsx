import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Discussion.module.css';
import { Link, useNavigate } from 'react-router-dom';
import CommentCard from './CommentCard';
import logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection,addDoc,deleteDoc,updateDoc,getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Blogs = [
//   { 'name': 'John Doe', 'comment': 'Nice solution! I think this is an optimal approach.', 'date': '20/10/2024' },
//   { 'name': 'Jane Smith', 'comment': 'This approach seems a bit complicated. Can someone explain it in simpler terms?', 'date': '20/10/2024' },
//   { 'name': 'Alice Cooper', 'comment': 'Can anyone explain why this approach works?', 'date': '20/10/23' },
//   { 'name': 'Bob Marley', 'comment': 'This works because it reduces the complexity from O(n^2) to O(n log n).', 'date': '20/10/2023' },
//   { 'name': 'Charlie Brown', 'comment': 'I tried this solution but encountered a runtime error for larger inputs.', 'date': '20/10/26023' },
//   { 'name': 'Eve Johnson', 'comment': 'Is this solution valid for all edge cases, especially with negative numbers?', 'date': '20/10/2024' },
//   { 'name': 'Dave Lee', 'comment': 'Thanks for sharing! This helped me improve my understanding of the problem.', 'date': '20/10/2024' },
//   { 'name': 'Mia Wallace', 'comment': 'I don\'t understand how the binary search part works. Can anyone clarify?', 'date': '20/10/2024' },
//   { 'name': 'Oscar Wilde', 'comment': 'Great explanation, but I think you can optimize this further by removing some redundant checks.', 'date': '20/10/2024' },
//   { 'name': 'Liam Neeson', 'comment': 'I am still stuck on the second part of the problem. Can someone help me out?', 'date': '20/10/2022' }
];

function DiscussionPage() {

  
  const BlogCollection = collection(db,'Blogs') ;
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(Blogs);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [isLoggedIn, setLogin] = useState(false);
  const userName = localStorage.getItem('name');

  useEffect(() => {
    if (userName) {
      setLogin(true);
    }
  }, []);

  async function postBlog() {
    if (inputRef.current.value.trim() === '') {
      toast.error('Please enter a comment');
      return;
    }

    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    let uName;
    if (userName) {
      uName = userName;
    } else {
      uName = 'Anonymous';
    }
    const blogs = {
      'name': uName,
      'comment': inputRef.current.value,
      'date': formattedDate
    }   
    addDoc(BlogCollection,blogs) // Adding blogs in firebase db
    
    inputRef.current.value = '';
    toast.success('Comment Posted',{
      autoClose:1000
    })
  
  }
 useEffect(()=>{
        const getBlogs =  async()=>{
          try{
            const blogList = await getDocs(BlogCollection);
            setBlogs(blogList.docs)
            console.log(blogList.docs[0].data());
          }catch(err){
              console.log('Error',err);
          }
        };
        getBlogs()
    },[postBlog])
  

  function onSignIn() {
    navigate('/login');
  }

  function onLogoutBtn(){
    toast.info('Logging Out',{
      autoClose:2000
    })
    setTimeout(()=>{
    setLogin(false);
    localStorage.removeItem('name');
    navigate('/');
    },2000)
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
        {!isLoggedIn ? (
          <button onClick={onSignIn} className={styles.signInButton}>Sign In</button>
        ) : (
          <div className={styles.loginData}>
            <p>Hey! {userName}</p>
            <button onClick={onLogoutBtn} className={styles.logoutButton}>Logout</button>
          </div>
        )}
      </header>

      {/* Discussion Title */}
      <h1 className={styles.title}>Discussion Area</h1>

      {/* Add New Comment */}
      <div className={styles.addBlog}>
        <textarea
          name="Add Comment"
          id="comment"
          placeholder="Join the discussion..."
          ref={inputRef}
        />
        <button onClick={postBlog} className={styles.postButton}>Post</button>
      </div>

      {/* Comments Section */}
      <div className={styles.commentSection}>
        {blogs.slice().reverse().map((ele, idx) => (  // slice() creates a shallow copy to avoid mutating the original array
          <CommentCard key={idx} data={ele} />
        ))}
      </div>

      <ToastContainer />
    </>
  );
}

export default DiscussionPage;
