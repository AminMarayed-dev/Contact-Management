import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { User, removeUser } from "../../api/users.api";
import { useContext } from "react";
import { FromContext } from "../../context/FormContextProvider";


function CardItem({
  user,

}: {
  user: User;
}) {
  const boxItems = [
    {
      heading: "نام:",
      text: user.name,
    },
    {
      heading: "شماره موبایل:",
      text: user.mobile,
    },
    {
      heading: "نسبت:",
      text: user.ratio,
    },
    {
      heading: "ایمیل:",
      text: user.email,
    },
  ];
  const {setFirstName, setLastName, setMobile, setRatio, setEmail, users, setUsers, setTextBtn, setEditId} = useContext(FromContext);



  return (
    <Card
      maxHeight={"210px"}
      bg={"#e5e7eb"}
      shadow={"0px 3px 8px rgba(0, 0, 0, 0.24)"}
      key={user.id}
    >
      <CardBody>
        {boxItems.map((item) => (
          <Box display={"flex"} alignItems={"center"}>
            <Heading fontSize={"16px"}>{item.heading}</Heading>
            <Text>{item.text}</Text>
          </Box>
        ))}
      </CardBody>
      <CardFooter dir="ltr">
        <Button
          borderRightRadius={"none"}
          bg={"blue"}
          textColor={"white"}
          _hover={"none"}
          onClick={async() => {
            const[first, last] = user.name.split(" ");
            setFirstName(first);
            setLastName(last);
            setMobile(user.mobile);
            setRatio(user.ratio);
            setEmail(user.email);
            setTextBtn("ویرایش");
            setEditId(user.id);
          }}
        >
          ویرایش
        </Button>
        <Button
          borderLeftRadius={"none"}
          bg={"red"}
          textColor={"white"}
          _hover={"none"}
          onClick={async () => {

            await removeUser(user.id);
            setUsers(users.filter((u) => u.id !== user.id));
          }}
        >
          حذف
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardItem;
