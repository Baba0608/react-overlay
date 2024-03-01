import { useState } from "react";

export const UserInput = ({ handler }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  return (
    <div className="bg-white p-4 mt-4 w-[500px] rounded-lg">
      <div>
        <label htmlFor="username" className="text-lg">
          Username
        </label>{" "}
        <br />
        <input
          className="border-2 border-gray-300 rounded-md p-1 w-[100%] mb-2 mt-1"
          type="text"
          placeholder="Enter Username...."
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="age" className="text-lg">
          Age(Years)
        </label>{" "}
        <br />
        <input
          className="border-2 border-gray-300 rounded-md p-1 w-[100%] mb-2 mt-1"
          type="text"
          placeholder="Enter age...."
          name="age"
          value={userAge}
          id="age"
          onChange={(e) => setUserAge(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <button
          className="bg-purple-700 px-8 py-1 text-white text-lg rounded-md"
          onClick={() => {
            if (handler({ userName, userAge })) {
              setUserAge("");
              setUserName("");
            }
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
};
