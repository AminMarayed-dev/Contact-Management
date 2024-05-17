import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { User, getUsers, postUsers } from "../../api/users.api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("لطفا نام را وارد کنید"),
  lastName: Yup.string().required("لطفا نام خانوادگی را وارد کنید"),
  mobile: Yup.string().required("لطفا شماره موبایل را وارد کنید"),
  email: Yup.string()
    .email("ایمیل نامعتبر")
    .required("لطفا ایمیل را وارد کنید"),
  ratio: Yup.string().required("لطفا یک نسبت انتخاب کنید"),
});

type SetUserType = {
  setUsers: (users: User[]) => void;
  users: User[];
};

function Form({ setUsers, users }: SetUserType) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [ratio, setRatio] = useState("ratio");

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

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
          {...register("firstName")}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
        <FormLabel>نام خانوادگی:</FormLabel>
        <Input
          type="text"
          placeholder="نام خانوادگی..."
          value={lastName}
          {...register("lastName")}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
        <FormLabel>شماره موبایل:</FormLabel>
        <Input
          type="text"
          placeholder="شماره موبایل..."
          value={mobile}
          {...register("mobile")}
          onChange={(e) => setMobile(e.target.value)}
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <FormLabel>نسبت:</FormLabel>
        <Select
          value={ratio}
          {...register("ratio")}
          onChange={(e) => setRatio(e.target.value)}
        >
          {options.map((option, index) => (
            <option value={option.value} key={index + 1}>
              {option.text}
            </option>
          ))}
        </Select>
        {errors.ratio && <p className="text-red-500">{errors.ratio.message}</p>}
        <FormLabel>ایمیل:</FormLabel>
        <Input
          type="email"
          placeholder="ایمیل..."
          value={email}
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Button
          width={"20%"}
          onClick={handleSubmit(async (data) => {
            await postUsers({
              id: String(Date.now()),
              name: `${data.firstName} ${data.lastName}`,
              mobile: data.mobile,
              email: data.email,
              ratio: data.ratio,
            }).then((data) => setUsers([...users, data]));
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobile("");
            setRatio("ratio");
          })}
        >
          اضافه کردن
        </Button>
      </FormControl>
    </div>
  );
}

export default Form;
