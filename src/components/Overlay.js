export const Overlay = ({ isValid, isValidAge, handler1, handler2 }) => {
  return (
    <div
      className={
        isValid
          ? "hidden"
          : "fixed w-[100%] h-[100%] bg-gray-700/80 top-0 left-0"
      }
      onClick={() => {
        handler1(true);
        handler2(true);
      }}
    >
      <div className="flex justify-center items-center h-[100%]">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="bg-purple-800 p-2 font-bold text-white text-lg w-[600px]">
            Invalid Input
          </div>

          <div className="py-1 px-4 text-lg">
            <p>
              {isValidAge
                ? "Please enter username"
                : "Please enter valid age (> 0)"}
            </p>
          </div>
          <div className="flex justify-end px-4 py-1">
            <button
              className="bg-purple-800 text-white px-5 py-1 rounded-md text-lg mb-2"
              onClick={() => {
                handler1(true);
                handler2(true);
              }}
            >
              okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
