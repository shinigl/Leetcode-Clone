import styles from './App.module.css';
import Card from './components/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from './main';
import leetcodeLogo from './assets/logo.png';

function App() {
  const ctx = useContext(myContext);

  return (
    <>
      <main>
        <header className={styles.navBar}>
          <div>
            <img src={leetcodeLogo} alt="logo" />
            <p>Leetcode</p>
          </div>
          <button id={styles.signInBtn}>Sign In</button>
        </header>

        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <select name="Difficulty" id="" placeholder="Difficulty">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className={styles.cardList}>
          <div className={styles.probHeader}>
            <div className={styles.sr}><p>Number</p></div>
            <div className={styles.problem}><p>Problem</p></div>
            <div className={styles.difficulty}><p>Difficulty</p></div>
          </div>
          {ctx.map((ele, idx) => (
            <Link key={idx} to={`/interface/${ele.Sr}/${ele.Title}`} className={styles.cardLink}>
              <Card data={ele} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
