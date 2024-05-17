
import { useState } from "react";
import Form from "./components/form/Form";
import ListUsers from "./components/list-users/ListUsers";
import { User } from "./api/users.api";


function App() {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <div className="flex px-3 mt-4 gap-4">
      <Form setUsers={setUsers} users={users}/>
      <ListUsers users={users}/>
    </div>
  );
}

export default App;


