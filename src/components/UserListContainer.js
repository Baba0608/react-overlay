import { UserList } from "./UserList";

export const UserListContainer = ({ userList }) => {
  if (userList.length === 0) {
    return;
  }
  return (
    <div className="flex flex-col bg-white mt-5 rounded-lg p-4">
      {userList.map((user) => (
        <UserList key={user.userName} user={user} />
      ))}
    </div>
  );
};
