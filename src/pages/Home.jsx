import "../styles/Home.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const example_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const MoodSelector = () => {
  const [mood, setMood] = useState(5);

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element
    const clickedValue = Math.ceil((x / rect.width) * 10);
    setMood(clickedValue);
  };

  return (
    <div>
      <div className="mood-scale" onClick={handleClick}></div>
      <p>Current mood: {mood}</p>
    </div>
  );
};

const Home = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [
        { title: "Give medication", completed: false, link: "/medication" },
        { title: "Reapply bandage", completed: false, link: "/bandage" },
        {
          title: "Do a general health inspection",
          completed: false,
          link: "/inspection",
        },
      ];
    }
  });
  const [timer, setTimer] = useState(60); // set initial visit time in minutes
  const [generalHealth, setGeneralHealth] = useState("");
  const [mood, setMood] = useState("");
  const [comments, setComments] = useState("");
  const navigate = useNavigate();
  const handleTodoClick = (index, new_route) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    localStorage.setItem("timer", JSON.stringify(timer));
    navigate(new_route);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 9000); // decrease every minute

    // Clean up the interval on unmount
    return () => clearInterval(countdown);
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <>
      <div className="dashboard">
        <div className="left-section">
          <h1>Rigmor Olsen</h1>
          <textarea
            placeholder={`Alder: 88 \nRelevant info: Diabetiker, dement, utredes for hjerteflimmer.\nAllergisk mot nylonhansker\nHar sterke motsigelser mot brødskiver og fiskekaker. \n\n${example_text} `}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <h2>General Health</h2>
          <textarea
            placeholder={example_text}
            value={generalHealth}
            onChange={(e) => setGeneralHealth(e.target.value)}
          />
          <h2>Patient mood indicator</h2>
          <MoodSelector />
          
        </div>

        <div className="right-section">
          <h2>To do:</h2>
          {todos.map((todo, index) => (
            <button
              className={todo.completed ? "completed" : "not-completed"}
              onClick={() => handleTodoClick(index, todo.link)}
            >
              {todo.title} {todo.completed && "✓"}
            </button>
            
          ))}
          <div className="top-right">
            <p>Time left: {timer} minutes</p>
          </div>
        </div>
      </div>
      <div className="bottom-right">
      <Link to="/add-comment">
        <button>Add Comment</button>
      </Link>
      <button onClick={() => navigate("/end")}>End visit</button>
    </div>
  </>
  );
};

export default Home;
