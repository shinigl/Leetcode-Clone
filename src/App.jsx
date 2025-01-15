
import {createBrowserRouter, RouterProvider} from 'react-router-dom' ;
import './App.css'
import Card from './components/Card'
import Interface from './components/Interface';
import { Link } from 'react-router-dom';

function App() {

  const problemsArray = [
    {
      "Sr": 1,
      "Title": '3Sum',
      "Difficulty": 'Easy',
      'description': 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
      
      'example': {
        'ex1': {
          'Input': 'nums = [2,7,11,15], target = 9',
          'Output': '[1,2]'
        },
        'ex2': {
          'Input': 'nums = [3,3], target = 6',
          'Output': '[0,1]'
        }
      }
    },
    
    {
      "Sr": 2,
      "Title": '4Sum',
      "Difficulty": 'Hard',
      'description': 'Given an array of integers nums and an integer target, answer in any order.',
      
      'example': {
        'ex1': {
          'Input': 'nums = [2,7,11,15], target = 9',
          'Output': '[1,2]'
        },
        'ex2': {
          'Input': 'nums = [3,3], target = 6',
          'Output': '[0,1]'
        }
      }
    },
    {
      "Sr": 3,
      "Title": '5Sum',
      "Difficulty": 'Hard',
      'description': 'Given an ',
      
      'example': {
        'ex1': {
          'Input': 'nums = [2,7,11,15], target = 9',
          'Output': '[1,2]'
        },
        'ex2': {
          'Input': 'nums = [3,3], target = 6',
          'Output': '[0,1]'
        }
      }
    },


  ]


  return (
    <>
    
      <h1>Problems</h1>
      <div className="search">

        <input type="text" placeholder='Search' />
        <select name="Difficulty" id="" placeholder='Difficulty'>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>

        </select>
      </div>
      {
        problemsArray.map((ele, idx) => {
          return (
           <Link to='/interface/' > <Card  data={ele} /> </Link>
          )
        })
      }
    
    </>
  )
}

export default App
