/* eslint-disable react/prop-types */
import React, { useState } from "react";

function ParentComponent() {
  const [children, setChildren] = useState([]);

  function handleClick() {
    const newChild = React.cloneElement(
      <ChildComponent />,
      {
        someProp: "someValue",
        children: "children",
      } // You can pass some props to the cloned element if needed
    );
    setChildren([...children, newChild]);
  }

  return (
    <div>
      <button onClick={handleClick}>Add Child</button>
      {children}
    </div>
  );
}

function ChildComponent(props) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)}>{props.someProp}</button>
      {isOpened && <p>{props.children}</p>}
    </div>
  );
}

function App() {
  return <div>{<ParentComponent />}</div>;
}
export default App;
