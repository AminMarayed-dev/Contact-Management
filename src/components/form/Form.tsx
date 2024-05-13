import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

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

function Form() {
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
        <Input type="text" placeholder="نام..." />
        <FormLabel>نام خانوادگی:</FormLabel>
        <Input type="text" placeholder="نام خانوادگی..." />
        <FormLabel>شماره موبایل:</FormLabel>
        <Input type="number" placeholder="شماره موبایل..." />
        <FormLabel>نسبت:</FormLabel>
        <Select>
          {options.map((option, index) => (
            <option value={option.value} key={index + 1}>
              {option.text}
            </option>
          ))}
        </Select>
        <FormLabel>ایمیل:</FormLabel>
        <Input type="email" placeholder="ایمیل..." />
        <Button width={"20%"}>اضافه کردن</Button>
      </FormControl>
    </div>
  );
}

export default Form;
