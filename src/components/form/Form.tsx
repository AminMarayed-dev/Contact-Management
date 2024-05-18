import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { getUsers, postUsers, updateUser } from "../../api/users.api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";
import { FromContext } from "../../context/FormContextProvider";

const options = [
  {
    text: "نسبت",
    value: "نسبت",
  },
  {
    text: "دوست",
    value: "دوست",
  },
  {
    text: "همکار",
    value: "همکار",
  },
  {
    text: "سایر",
    value: "سایر",
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

function Form() {
  const {
    firstName,
    lastName,
    mobile,
    email,
    ratio,
    users,
    setFirstName,
    setLastName,
    setMobile,
    setEmail,
    setRatio,
    setUsers,
    textBtn,
    setTextBtn,
    editId,
    setEditId,
  } = useContext(FromContext);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, [setUsers]);

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
      ratio: ratio,
    },
  });
  useEffect(() => {
    reset({
      firstName,
      lastName,
      mobile,
      email,
      ratio,
    });
  }, [firstName, lastName, mobile, email, ratio, reset]);

  return (
    <div className="flex flex-col gap-3 w-full md:w-1/2 items-center">
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
            console.log(e.target.value);
            setFirstName(e.target.value);
          }}
        />
        {/* {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )} */}
        {errors.firstName && typeof errors.firstName.message === "string" && (
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
        {errors.lastName && typeof errors.lastName.message === "string" && (
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
        {errors.mobile && typeof errors.mobile.message === "string" && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}
        <FormLabel>نسبت:</FormLabel>
        <Select
          value={ratio}
          {...register("ratio")}
          onChange={(e) => setRatio(e.target.value)}
          className="hide-arrow"
          icon={undefined}
        >
          {options.map((option, index) => (
            <option value={option.value} key={index + 1}>
              {option.text}
            </option>
          ))}
        </Select>
        {errors.ratio && typeof errors.ratio.message === "string" && (
          <p className="text-red-500">{errors.ratio.message}</p>
        )}
        <FormLabel>ایمیل:</FormLabel>
        <Input
          type="email"
          placeholder="ایمیل..."
          value={email}
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && typeof errors.email.message === "string" && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
        <Button
          width={"20%"}
          onClick={handleSubmit(async (data) => {
            // edit
            if (editId) {
              updateUser(editId, {
                name: `${data.firstName} ${data.lastName}`,
                mobile: data.mobile,
                email: data.email,
                ratio: data.ratio,
              }).then(() => getUsers().then((data) => setUsers(data)));
              setTextBtn("اضافه کردن");
              setEditId("");
            } else {
              await postUsers({
                id: String(Date.now()),
                name: `${data.firstName} ${data.lastName}`,
                mobile: data.mobile,
                email: data.email,
                ratio: data.ratio,
              }).then((data) => setUsers([...users, data]));
            }
            // add
            // reset
            reset();
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobile("");
            setRatio("نسبت");
          })}
        >
          {textBtn}
        </Button>
      </FormControl>
    </div>
  );
}

export default Form;
