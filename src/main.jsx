
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' ;
import Card from './components/Card'
import Interface from './components/Interface';
import { createContext } from 'react';


export const myContext = createContext() ;


const routes = createBrowserRouter([
  {
    path: '/',
    element : <App/>
  },
  {
    path: '/interface/:id/:name',
    element : <Interface/>
  }

]);


const problemsArray = [
  {
    "Sr": 1,
    "Title": '3Sum',
    "Difficulty": 'Easy',
    'description': 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    
    'example': [
      {
        'Input': 'nums = [2,7,11,15], target = 9',
        'Output': '[1,2]'
      },
      {
        'Input': 'nums = [3,3], target = 6',
        'Output': '[0,1]'
      }
    ]
  },
  
  {
    "Sr": 2,
    "Title": '4Sum',
    "Difficulty": 'Hard',
    'description': 'Given an array of integers nums and an integer target, answer in any order.',
    
    'example': [
      {
        'Input': 'nums = [2,7,11,15], target = 9',
        'Output': '[1,2]'
      },
      {
        'Input': 'nums = [3,3], target = 6',
        'Output': '[0,1]'
      }
    ]
  },
  {
    "Sr": 3,
    "Title": '5Sum',
    "Difficulty": 'Hard',
    'description': 'Given an ',
    
    'example': [
      {
        'Input': 'nums = [2,7,11,15], target = 9',
        'Output': '[1,2]'
      },
      {
        'Input': 'nums = [3,3], target = 6',
        'Output': '[0,1]'
      }
    ]
  },
]



createRoot(document.getElementById('root')).render(
  <myContext.Provider value={problemsArray} >
  <RouterProvider router ={routes}> </RouterProvider>
  </myContext.Provider>
)
