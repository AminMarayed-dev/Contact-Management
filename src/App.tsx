import Form from "./components/form/Form";
import ListUsers from "./components/list-users/ListUsers";

function App() {
  return (
    <div className="flex px-3 mt-4 gap-4">
      <Form />
      <ListUsers />
    </div>
  );
}

export default App;
