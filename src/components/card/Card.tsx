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

function CardItem({
  user,
  setUsers,
  users,
}: {
  user: User;
  users: User[];
  setUsers: (users: User[]) => void;
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
