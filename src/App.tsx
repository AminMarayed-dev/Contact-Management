
import Form from "./components/form/Form";
import ListUsers from "./components/list-users/ListUsers";

import { FormContextProvider } from "./context/FormContextProvider";


function App() {
  // const [users, setUsers] = useState<User[]>([]);
  return (
    <div className="flex px-3 mt-4 gap-4">
      <FormContextProvider>
        <Form />
        <ListUsers  />
      </FormContextProvider>
    </div>
  );
}

export default App;
