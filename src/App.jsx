import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
    <h1>Welcome to Treat Yourself!</h1>
    <h2>Add tasks to your To Do list.</h2>
    <h2>Click "Completed" when you finish a task.</h2>
    <h2>Enjoy some fun content as a short break between tasks.</h2>
    <ToDoList />
    </div>
  );
}

export default App;
