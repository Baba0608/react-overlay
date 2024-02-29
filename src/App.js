import ReactDOM from "react-dom/client";
import { UserInput } from "./components/UserInput";
import { UserListContainer } from "./components/UserListContainer";
import { Overlay } from "./components/Overlay";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [userList, setUserList] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  const addUserHandler = ({ userName, userAge: age }) => {
    console.log(userName);
    console.log(age);
    if (userName === "") {
      setIsValid(false);
      return;
    }
    if (age === "" || +age < 0) {
      setIsValidAge(false);
      setIsValid(false);
      return;
    }
    setUserList([...userList, { userName, age }]);
  };

  return (
    <div className="">
      <UserInput handler={addUserHandler} />
      <UserListContainer userList={userList} />
      <Overlay
        isValid={isValid}
        isValidAge={isValidAge}
        handler1={setIsValid}
        handler2={setIsValidAge}
      />
    </div>
  );
};

root.render(<App />);
