import React, { useContext, useState } from 'react';
import { myContext } from '../main';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Interface.module.css';
import logo from '../assets/logo.png';

function Interface() {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const { id, name } = useParams();
  const ctx = useContext(myContext);
  const prob = ctx.find((ele) => ele.Sr === parseInt(id));
  console.log(prob);

  function btn1Click() {
    if (!btn1) {
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
    }
  }
  function btn2Click() {
    if (!btn2) {
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
    }
  }
  function btn3Click() {
    if (!btn3) {
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
    }
  }

  const difficultyClass = prob.Difficulty.toLowerCase();

  return (
    <>
      <header className={styles.header}>
        {/* Left Section */}
        <div className={styles.headerLeft}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <div className={styles.problemList}>
            <Link to='/'> Problem List </Link>
            <button className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowLeft} /> {/* FontAwesome left arrow */}
            </button>
            <button className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowRight} /> {/* FontAwesome right arrow */}
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className={styles.headerMiddle}>
          <button>Submit</button>
          <button>Run</button>
        </div>

        {/* Right Section */}
        <div className={styles.headerRight}>
          <button>Sign In</button>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.interfaceContainer}>
        <div className={styles.leftInt}>
          <div className={styles.upperPart}>
            <h2>{prob.Title}</h2>
            <span className={`${styles.difficulty} ${styles[difficultyClass]}`}>
              {prob.Difficulty}
            </span>
          </div>
          <p>{prob.description}</p>
          <div className={styles.eg}>
            {prob.example.map((ele, idx) => {
              return (
                <div key={idx}>
                  <p>Example: {idx+1}</p>
                  <p>Input: {ele.Input}</p>
                  <p>Output: {ele.Output}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.constraints}>
            <p>Constraints:</p>
            <p>{`2 <= nums.length <= 104`}</p>
          </div>
        </div>

        <div className={styles.rightInt}>
          <div className={styles.codeArea}>
            <textarea
              className={styles.codeAreaTextarea}
              placeholder="function TwoSum(nums, target) {}"
            ></textarea>
          </div>

          <div className={styles.testCase}>
            <h3>Testcase</h3>
            <div className={styles.cases}>
              <button
                onClick={btn1Click}
                className={btn1 ? styles.selected : ''}
              >
                Case 0
              </button>
              <button
                onClick={btn2Click}
                className={btn2 ? styles.selected : ''}
              >
                Case 1
              </button>
              <button
                onClick={btn3Click}
                className={btn3 ? styles.selected : ''}
              >
                Case 2
              </button>
            </div>

            <div className={styles.inout}>
              {btn1 ? (
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
              ) : (
                prob.example[0].Input
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interface;
