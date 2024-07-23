import React, { useState } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (input.trim()) {
      setList([...list, { title: input, description: '' }]);
      setInput('');
    }
  };

  const showModal = (title) => {
    const task = list.find(task => task.title === title);
    setModalContent(task);
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="task-list">
        {list.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            onClick={() => showModal(task.title)}
          />
        ))}
      </div>
      <Modal
        show={modalShow}
        handleClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
      />
    </div>
  );
};

export default App;
