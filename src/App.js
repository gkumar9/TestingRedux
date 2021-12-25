import { useSelector, useDispatch } from "react-redux";
import { adding, removing, listTodo } from "./todoslice";
import { useState } from "react";
// export function Counter() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div>
//         <span>Value: {count}</span>

//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }
export function Todo() {
  const [task, setTask] = useState("");
  const list = useSelector(listTodo);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    // evt.preventDefault();
    // console.log(value);
    setTask(value);
  };
  const handleaddtask = () => {
    dispatch(adding(task));
    setTask("");
  };
  const handleremovetask = (index) => {
    dispatch(removing(index));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleaddtask();
  };

  return (
    <div style={{ margin: "20px" }}>
      <div>
        <span>add task: </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
          &emsp;
          <button onClick={handleaddtask}>Add task</button>
        </form>
        <br />
        <br />
        <span>LIST:</span>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span> &emsp;&emsp;
              <button onClick={() => handleremovetask(index)}>x</button>
            </li>
          );
        })}
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
