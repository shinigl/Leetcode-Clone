import React, { useContext, useState } from 'react';
import { myContext } from '../main';
import { useParams } from 'react-router-dom';
import styles from './Interface.module.css';

function Interface() {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const { id, name } = useParams();
  const ctx = useContext(myContext);
  const prob = ctx.find((ele) => ele.Sr === parseInt(id));

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

  return (
    <div className={styles.interfaceContainer}>
      <div className={styles.leftInt}>
        <h2>{prob.Title}</h2>
        <span className={styles.difficulty}>{prob.Difficulty}</span>
        <p>{prob.description}</p>
        <div className={styles.eg}>
          {prob.example.map((ele, idx) => {
            return (
              <div key={idx}>
                <p>Example: {idx}</p>
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
  );
}

export default Interface;
