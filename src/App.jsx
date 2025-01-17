import styles from './styles/App.module.css'
import Card from './components/Card';
import { Link } from 'react-router-dom';
import { useContext , useState } from 'react';
import { myContext } from './main';
import leetcodeLogo from './assets/logo.png';

function App() {
  
  const ctx = useContext(myContext);

  const [searchProb , setSearchProb] = useState('');
  const [diff,setDiff] = useState('All');


  const filteredProbs = ctx.filter((ele) =>{
    return(
    ele.Title.toLowerCase().includes(searchProb.toLowerCase()) 
    && (diff==='All' || ele.Difficulty === diff)

  )
  }
  )


  //Search function
  function handleSearch(e){
    setSearchProb(e.target.value)
  }

  //Difficulty select fnx
  function handleDifficulty(e){
    setDiff(e.target.value)
  }

  return (
    <>
      <main>
        <header className={styles.navBar}>
          <div >
            <img src={leetcodeLogo} alt="logo" />
            <p>Leetcode</p>
          </div>
          <button id={styles.signInBtn}>Sign In</button>
        </header>

        <div className={styles.search}>
          <input 
          type="text" 
          placeholder="Search" 
          value={searchProb}
          onChange={(e)=> handleSearch(e)}
          />
          <select 
          name="Difficulty" 
          placeholder="Difficulty"
          value={diff}
          onChange={(e)=>handleDifficulty(e)}
          >
             <option value="All">All</option>
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
          {
          filteredProbs.length > 0 ? (
          filteredProbs.map((ele, idx) => (
            <Link key={idx} to={`/interface/${ele.Sr}`} className={styles.cardLink}>
              <Card data={ele} />
            </Link>
          ))
          ) : (
            <p>No such problems available</p>
          ) 
          
          }
        </div>
      </main>
    </>
  );
}

export default App;
