import mongoose, { mongo } from "mongoose";
import Question from "../models/Question.js";

const data = [
  {
    "question": "What is the capital of France?",
    "subject": "Geography",
    "difficulty": "Easy",
    "marks": 1,
    "options": ["Paris", "London", "Berlin", "Rome"],
    "correctAnswer": "Paris",
    "public": true
  },
  {
    "question": "Which data structure uses FIFO principle?",
    "subject": "Computer Science",
    "difficulty": "Easy",
    "marks": 2,
    "options": ["Stack", "Queue", "Tree", "Graph"],
    "correctAnswer": "Queue",
    "public": true
  },
  {
    "question": "Who developed the theory of relativity?",
    "subject": "Physics",
    "difficulty": "Medium",
    "marks": 2,
    "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
    "correctAnswer": "Albert Einstein",
    "public": true
  },
  {
    "question": "What is the time complexity of binary search?",
    "subject": "Computer Science",
    "difficulty": "Medium",
    "marks": 3,
    "options": ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    "correctAnswer": "O(log n)",
    "public": true
  },
  {
    "question": "Which gas is essential for photosynthesis?",
    "subject": "Biology",
    "difficulty": "Easy",
    "marks": 1,
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "correctAnswer": "Carbon Dioxide",
    "public": true
  },
  {
    "question": "In which year did World War II end?",
    "subject": "History",
    "difficulty": "Medium",
    "marks": 2,
    "options": ["1945", "1939", "1918", "1950"],
    "correctAnswer": "1945",
    "public": true
  },
  {
    "question": "Which programming language is primarily used for Android app development?",
    "subject": "Computer Science",
    "difficulty": "Easy",
    "marks": 2,
    "options": ["Java", "C++", "Python", "Swift"],
    "correctAnswer": "Java",
    "public": true
  },
  {
    "question": "What is the SI unit of electric current?",
    "subject": "Physics",
    "difficulty": "Easy",
    "marks": 1,
    "options": ["Volt", "Ampere", "Watt", "Ohm"],
    "correctAnswer": "Ampere",
    "public": true
  },
  {
    "question": "Which algorithm is used for finding the shortest path in a graph?",
    "subject": "Computer Science",
    "difficulty": "Hard",
    "marks": 4,
    "options": ["Merge Sort", "Dijkstra's Algorithm", "DFS", "BFS"],
    "correctAnswer": "Dijkstra's Algorithm",
    "public": true
  },
  {
    "question": "What is H2O commonly known as?",
    "subject": "Chemistry",
    "difficulty": "Easy",
    "marks": 1,
    "options": ["Water", "Oxygen", "Hydrogen", "Salt"],
    "correctAnswer": "Water",
    "public": true
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "subject": "Astronomy",
    "difficulty": "Easy",
    "marks": 1,
    "options": ["Earth", "Venus", "Mars", "Jupiter"],
    "correctAnswer": "Mars",
    "public": true
  },
  {
    "question": "Which sorting algorithm has the best average case time complexity?",
    "subject": "Computer Science",
    "difficulty": "Hard",
    "marks": 5,
    "options": ["Quick Sort", "Bubble Sort", "Merge Sort", "Insertion Sort"],
    "correctAnswer": "Merge Sort",
    "public": true
  }
]


mongoose.connect("mongodb://127.0.0.1:27017/oesdb")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));



async function insertData() {
    try{
    await Question.deleteMany({});
    await Question.insertMany(data);
    console.log("Data Inserted successfully")
    }
    catch(err) {
        console.log(err);
    }
}

insertData();