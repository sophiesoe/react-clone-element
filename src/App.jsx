/* eslint-disable react/prop-types */
import React, { useState } from "react";

function ParentComponent() {
  const [children, setChildren] = useState([]);

  function handleClick() {
    const newChild = React.cloneElement(
      <ChildComponent key={children.length} />,
      { someProp: "Toggle Options" } // You can pass some props to the cloned element if needed
    );
    setChildren([...children, newChild]);
  }

  return (
    <div>
      <div style={{ margin: "20px 0" }}>
        <button onClick={handleClick}>Add More</button>
      </div>
      {children}
    </div>
  );
}

function ChildComponent(props) {
  const [isOpened, setIsOpened] = useState(false);
  const [children, setChildren] = useState([]);
  function handleClick() {
    const newChild = React.cloneElement(
      <ChildComponent key={children.length} />,
      { someProp: "Toggle Options" } // You can pass some props to the cloned element if needed
    );
    setChildren([...children, newChild]);
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <div>
          <button onClick={() => setIsOpened(!isOpened)}>
            {props.someProp}
          </button>
          <p style={{ display: isOpened ? "block" : "none" }}>
            {isOpened && (
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </p>
        </div>
        <div>
          <button onClick={handleClick}>Add More</button>
        </div>
      </div>
      <br />
      {children}
    </div>
  );
}

function App() {
  return <div style={{ padding: "1.4em" }}>{<ParentComponent />}</div>;
}
export default App;
