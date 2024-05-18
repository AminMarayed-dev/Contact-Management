import { ReactNode, createContext, useState } from "react";
import { User } from "../api/users.api";

export const FromContext = createContext<any>({});

type Props = {
  children?: ReactNode;
};
export const FormContextProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [ratio, setRatio] = useState("ratio");
  const [textBtn, setTextBtn] = useState("اضافه کردن");
  const [editId, setEditId] = useState("")

  return (
    <FromContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        mobile,
        setMobile,
        email,
        setEmail,
        ratio,
        setRatio,
        users,
        setUsers,
        textBtn,
        setTextBtn,
        editId,
        setEditId
      }}
    >
      {children}
    </FromContext.Provider>
  );
};
