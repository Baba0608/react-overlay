export const UserList = ({ user }) => {
  console.log(user);
  return (
    <div className="border-b-2 border-gray-400">
      <p>{user.userName}</p>
      <p>{user.age} (in Years)</p>
    </div>
  );
};
