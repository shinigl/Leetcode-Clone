
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' ;
import Interface from './components/Interface';
import { createContext } from 'react';
import Header from './components/Header.jsx';


export const myContext = createContext() ;


const routes = createBrowserRouter([
  {
    path: '/',
    element : <App/>
  },
  {
    path: '/interface/:id',
    element : <Interface/>
  }

]);

const problemsArray = [
  {
    "Sr": 1,
    "Title": 'Three Sum',
    "Difficulty": 'Easy',
    "description": 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
    "example": [
      { 'Input': 'nums = [2,7,11,15], target = 9', 'Output': '[1,2]' },
      { 'Input': 'nums = [3,3], target = 6', 'Output': '[0,1]' },
      { 'Input': 'nums = [-1,0,1,2,-1,-4], target = 0', 'Output': '[-1,0,1]' }
    ],
    "constraints": '2 <= nums.length <= 1000, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9'
  },

  {
    "Sr": 2,
    "Title": 'Four Sum',
    "Difficulty": 'Hard',
    "description": 'Given an array of integers nums and an integer target, return all unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that a, b, c, and d are distinct indices and nums[a] + nums[b] + nums[c] + nums[d] == target.',
    "example": [
      { 'Input': 'nums = [1,0,-1,0,-2,2], target = 0', 'Output': '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]' },
      { 'Input': 'nums = [2,2,2,2,2], target = 8', 'Output': '[[2,2,2,2]]' },
      { 'Input': 'nums = [-1,0,1,2,-1,-4], target = 1', 'Output': '[[ -1, 0, 1, 2]]' }
    ],
    "constraints": '1 <= nums.length <= 200, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9'
  },

  {
    "Sr": 3,
    "Title": 'Two Sum',
    "Difficulty": 'Easy',
    "description": 'Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.',
    "example": [
      { 'Input': 'nums = [2,7,11,15], target = 9', 'Output': '[0,1]' },
      { 'Input': 'nums = [3,3], target = 6', 'Output': '[0,1]' },
      { 'Input': 'nums = [3,2,4], target = 6', 'Output': '[1,2]' }
    ],
    "constraints": '2 <= nums.length <= 1000, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9'
  },

  {
    "Sr": 4,
    "Title": 'Longest Substring Without Repeating Characters',
    "Difficulty": 'Medium',
    "description": 'Given a string s, find the length of the longest substring without repeating characters.',
    "example": [
      { 'Input': 's = "abcabcbb"', 'Output': '3' },
      { 'Input': 's = "bbbbb"', 'Output': '1' },
      { 'Input': 's = "pwwkew"', 'Output': '3' }
    ],
    "constraints": '0 <= s.length <= 1000, s consists of English letters, digits, symbols, and spaces.'
  },

  {
    "Sr": 5,
    "Title": 'Valid Parentheses',
    "Difficulty": 'Easy',
    "description": 'Given a string s containing just the characters "(", ")", "{", "}", "[", "]", determine if the input string is valid.',
    "example": [
      { 'Input': 's = "()"', 'Output': 'true' },
      { 'Input': 's = "()[]{}",', 'Output': 'true' },
      { 'Input': 's = "(]', 'Output': 'false' }
    ],
    "constraints": '1 <= s.length <= 100, s consists of parentheses only.'
  },

  {
    "Sr": 6,
    "Title": 'Merge Intervals',
    "Difficulty": 'Medium',
    "description": 'Given a collection of intervals, merge all overlapping intervals.',
    "example": [
      { 'Input': 'intervals = [[1,3],[2,6],[8,10],[15,18]]', 'Output': '[[1,6],[8,10],[15,18]]' },
      { 'Input': 'intervals = [[1,4],[4,5]]', 'Output': '[[1,5]]' },
      { 'Input': 'intervals = [[1,3],[2,4],[3,5]]', 'Output': '[[1,5]]' }
    ],
    "constraints": '1 <= intervals.length <= 10^4, intervals[i].length == 2, 0 <= intervals[i][0] <= intervals[i][1] <= 10^4'
  },

  {
    "Sr": 7,
    "Title": 'Container With Most Water',
    "Difficulty": 'Medium',
    "description": 'Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i are at (i, ai) and (i, 0). Find two lines that together with the x-axis form a container, such that the container contains the most water.',
    "example": [
      { 'Input': 'height = [1,8,6,2,5,4,8,3,7]', 'Output': '49' },
      { 'Input': 'height = [1,1]', 'Output': '1' },
      { 'Input': 'height = [2,3,10,5,7,8,9,4,6]', 'Output': '36' }
    ],
    "constraints": '2 <= height.length <= 10^5, 0 <= height[i] <= 10^4'
  },

  {
    "Sr": 8,
    "Title": 'Palindrome Number',
    "Difficulty": 'Easy',
    "description": 'Given an integer x, return true if x is a palindrome and false otherwise.',
    "example": [
      { 'Input': 'x = 121', 'Output': 'true' },
      { 'Input': 'x = -121', 'Output': 'false' },
      { 'Input': 'x = 10', 'Output': 'false' }
    ],
    "constraints": '-2^31 <= x <= 2^31 - 1'
  },

  {
    "Sr": 9,
    "Title": 'Reverse Integer',
    "Difficulty": 'Easy',
    "description": 'Given a 32-bit signed integer, reverse digits of an integer.',
    "example": [
      { 'Input': 'x = 123', 'Output': '321' },
      { 'Input': 'x = -123', 'Output': '-321' },
      { 'Input': 'x = 120', 'Output': '21' }
    ],
    "constraints": '-2^31 <= x <= 2^31 - 1'
  },

  {
    "Sr": 10,
    "Title": 'String to Integer (atoi)',
    "Difficulty": 'Medium',
    "description": 'Implement atoi which converts a string to an integer.',
    "example": [
      { 'Input': 's = "42"', 'Output': '42' },
      { 'Input': 's = "   -42"', 'Output': '-42' },
      { 'Input': 's = "4193 with words"', 'Output': '4193' }
    ],
    "constraints": '0 <= s.length <= 200, s consists of English letters, digits, and spaces.'
  },

  {
    "Sr": 11,
    "Title": 'Zigzag Conversion',
    "Difficulty": 'Medium',
    "description": 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:',
    "example": [
      { 'Input': 's = "PAYPALISHIRING", numRows = 3', 'Output': 'PAHNAPLSIIGYIR' },
      { 'Input': 's = "PAYPALISHIRING", numRows = 4', 'Output': 'PINALSIGYAHRPI' },
      { 'Input': 's = "A", numRows = 1', 'Output': 'A' }
    ],
    "constraints": '1 <= s.length <= 1000, 1 <= numRows <= 1000'
  },

  {
    "Sr": 12,
    "Title": 'Add Two Numbers',
    "Difficulty": 'Medium',
    "description": 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.',
    "example": [
      { 'Input': 'l1 = [2,4,3], l2 = [5,6,4]', 'Output': '[7,0,8]' },
      { 'Input': 'l1 = [0], l2 = [0]', 'Output': '[0]' },
      { 'Input': 'l1 = [9,9], l2 = [1]', 'Output': '[0,0,1]' }
    ],
    "constraints": 'The number of nodes in each list is in the range [1, 100]. 0 <= Node.val <= 9. It is guaranteed that the list represents a number.'
  },

  {
    "Sr": 13,
    "Title": 'Median of Two Sorted Arrays',
    "Difficulty": 'Hard',
    "description": 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
    "example": [
      { 'Input': 'nums1 = [1,3], nums2 = [2]', 'Output': '2.0' },
      { 'Input': 'nums1 = [1,2], nums2 = [3,4]', 'Output': '2.5' },
      { 'Input': 'nums1 = [0,0], nums2 = [0,0]', 'Output': '0.0' }
    ],
    "constraints": 'nums1.length == m, nums2.length == n, 0 <= m <= 1000, 0 <= n <= 1000, 1 <= m + n <= 2000'
  },

  {
    "Sr": 14,
    "Title": 'Longest Palindromic Substring',
    "Difficulty": 'Medium',
    "description": 'Given a string s, return the longest palindromic substring.',
    "example": [
      { 'Input': 's = "babad"', 'Output': '"bab"' },
      { 'Input': 's = "cbbd"', 'Output': '"bb"' },
      { 'Input': 's = "a"', 'Output': '"a"' }
    ],
    "constraints": '1 <= s.length <= 1000, s consists of only digits and English letters.'
  },

  {
    "Sr": 15,
    "Title": 'Group Anagrams',
    "Difficulty": 'Medium',
    "description": 'Given an array of strings strs, group the anagrams together.',
    "example": [
      { 'Input': 'strs = ["eat","tea","tan","ate","nat","bat"]', 'Output': '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
      { 'Input': 'strs = [""]', 'Output': '[[""]]' },
      { 'Input': 'strs = ["a", "b", "c"]', 'Output': '[["a"],["b"],["c"]]' }
    ],
    "constraints": '1 <= strs.length <= 100, 0 <= strs[i].length <= 100, strs[i] consists of lowercase English letters.'
  },

  {
    "Sr": 16,
    "Title": 'Search in Rotated Sorted Array',
    "Difficulty": 'Medium',
    "description": 'Given an integer array nums sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1.',
    "example": [
      { 'Input': 'nums = [4,5,6,7,0,1,2], target = 0', 'Output': '4' },
      { 'Input': 'nums = [4,5,6,7,0,1,2], target = 3', 'Output': '-1' },
      { 'Input': 'nums = [1], target = 1', 'Output': '0' }
    ],
    "constraints": '1 <= nums.length <= 5000, -10^4 <= nums[i] <= 10^4, nums is guaranteed to be rotated at some pivot.'
  },

  {
    "Sr": 17,
    "Title": 'Valid Sudoku',
    "Difficulty": 'Medium',
    "description": 'Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:',
    "example": [
      { 'Input': 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],"..."]', 'Output': 'true' },
      { 'Input': 'board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],"..."]', 'Output': 'false' }
    ],
    "constraints": 'board.length == 9, board[i].length == 9, board[i][j] is a digit or ".".'
  },

  {
    "Sr": 18,
    "Title": 'Number of Islands',
    "Difficulty": 'Medium',
    "description": 'Given an m x n 2D binary grid grid, where 0’s represent water and 1’s represent land, return the number of islands.',
    "example": [
      { 'Input': 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', 'Output': '1' },
      { 'Input': 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","1","1"],["0","0","1","1","1"]]', 'Output': '2' }
    ],
    "constraints": 'm == grid.length, n == grid[i].length, 1 <= m, n <= 300, grid[i][j] is "0" or "1".'
  },

  {
    "Sr": 19,
    "Title": 'Climbing Stairs',
    "Difficulty": 'Easy',
    "description": 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    "example": [
      { 'Input': 'n = 2', 'Output': '2' },
      { 'Input': 'n = 3', 'Output': '3' },
      { 'Input': 'n = 4', 'Output': '5' }
    ],
    "constraints": '1 <= n <= 45'
  },

  {
    "Sr": 20,
    "Title": 'Coin Change',
    "Difficulty": 'Medium',
    "description": 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. You want to find the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.',
    "example": [
      { 'Input': 'coins = [1,2,5], amount = 11', 'Output': '3' },
      { 'Input': 'coins = [2], amount = 3', 'Output': '-1' },
      { 'Input': 'coins = [1], amount = 0', 'Output': '0' }
    ],
    "constraints": '1 <= coins.length <= 12, 1 <= coins[i] <= 1000, 0 <= amount <= 10^4'
  }
];



createRoot(document.getElementById('root')).render(
  <myContext.Provider value={problemsArray} >
  <RouterProvider router ={routes}> </RouterProvider>
  </myContext.Provider>
)
