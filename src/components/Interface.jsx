import React, { useContext, useState, useRef, useEffect } from 'react';
import { myContext } from '../main';
import { useParams } from 'react-router-dom';

import styles from '../styles/Interface.module.css';
import * as monaco from 'monaco-editor';
import Header from './Header';

function Interface() {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const { id } = useParams();
  
  const ctx = useContext(myContext);
  
  const prob = ctx.find((ele) => ele.Sr === parseInt(id));

  const monacoRef = useRef(null); // Reference to Monaco container
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (monacoRef.current && !editor) {
      const monacoEditor = monaco.editor.create(monacoRef.current, {
        value: `function ${prob.Title.replace(/\s+/g, '')} {\n  // Write your code here\n}`,
        language: "javascript",  
        theme: "vs-dark", 
        automaticLayout: true, 
        minimap: { enabled: false },
      });
      setEditor(monacoEditor);
    }

    return () => {
      if (editor) {
        editor.dispose(); // Cleanup on component unmount
      }
    };
  }, [editor]);

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

  const difficultyClass = prob.Difficulty.toLowerCase(); //Difficulty class
   
  return (
    <>
   
      <Header/>
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
                  <p>Example: {idx + 1}</p>
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
            {/* Monaco Editor container */}
            <div ref={monacoRef} style={{ height: "400px", width: "100%" }}></div>
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
                  <p>{prob.example[1].Input}</p>
                </>
              ) : btn3 ? (
                <>
                  <p>{prob.example[2].Input}</p>
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
