import Form from "./components/form/Form";
import ListUsers from "./components/list-users/ListUsers";

import { FormContextProvider } from "./context/FormContextProvider";
import Header from "./layout/header/Header";

function App() {
  return (
    <>
      <Header/>
      <div className="flex flex-col md:flex-row  px-3 mt-4 gap-4">
        <FormContextProvider>
          <Form />
          <ListUsers />
        </FormContextProvider>
      </div>
    </>
  );
}

export default App;
