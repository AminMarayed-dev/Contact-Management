import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { User, getUsers, postUsers } from "../../api/users.api";

const options = [
  {
    text: "نسبت",
    value: "ratio",
  },
  {
    text: "دوست",
    value: "friend",
  },
  {
    text: "همکار",
    value: "colleague",
  },
  {
    text: "سایر",
    value: "other",
  },
];

type SetUserType = {
  setUsers:(users:User[]) => void
  users: User[]
}

function Form({setUsers, users}:SetUserType) {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [ratio, setRatio] = useState("ratio");

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);
  return (
    <div className="flex flex-col gap-3 w-1/2 items-center">
      <h3 className="font-bold text-lg">اضافه/ویرایش کاربران</h3>
      <FormControl
        px={8}
        py={4}
        display={"flex"}
        flexDir={"column"}
        gap={2}
        borderRadius={"8px"}
        shadow={"0px 5px 15px rgba(0, 0, 0, 0.35)"}
      >
        <FormLabel>نام:</FormLabel>
        <Input
          type="text"
          placeholder="نام..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormLabel>نام خانوادگی:</FormLabel>
        <Input
          type="text"
          placeholder="نام خانوادگی..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormLabel>شماره موبایل:</FormLabel>
        <Input
          type="text"
          placeholder="شماره موبایل..."
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <FormLabel>نسبت:</FormLabel>
        <Select value={ratio} onChange={(e) => setRatio(e.target.value)}>
          {options.map((option, index) => (
            <option value={option.value} key={index + 1}>
              {option.text}
            </option>
          ))}
        </Select>
        <FormLabel>ایمیل:</FormLabel>
        <Input
          type="email"
          placeholder="ایمیل..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          width={"20%"}
          onClick={async () => {
            await postUsers({
              id: Date.now(),
              name: `${firstName} ${lastName}`,
              mobile,
              email,
              ratio,
            }).then(data=> setUsers([...users, data]));
            setFirstName('');
            setLastName('');
            setEmail('');
            setMobile("");
            setRatio("");
          }}
        >
          اضافه کردن
        </Button>
      </FormControl>
    </div>
  );
}

export default Form;
