import styles from './App.module.css'
import Card from './components/Card'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from './main';
import leetcodeLogo from './assets/logo.png'

function App() {
  const ctx = useContext(myContext);
  console.log(ctx);

  return (
    <>
      <main>
        <header className={styles.navBar}>
          <div>
            <img src={leetcodeLogo} alt="logo" />
            <p>Leetcode</p>
          </div>
          <button>Sign In</button>
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
        <div style={{display:'flex',justifyContent:'space-around', height: '50px',
      alignItems: 'center' , backgroundColor:'#2a2a2a'}}>
         <p>Serial No.</p>
         <p>Problem Name</p>
         <p>Difficulty</p>
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
