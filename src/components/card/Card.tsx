import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { User } from "../../api/users.api";

const boxItems = [
  {
    heading: "نام:",
    text: "امین مراید",
  },
  {
    heading: "شماره موبایل:",
    text: "09100034661",
  },
  {
    heading: "نسبت:",
    text: "همکار",
  },
  {
    heading: "ایمیل:",
    text: "aminmarayed4@gmail.com",
  },
];

function CardItem({ user }: {user:User}) {
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
            <Text>{user.name}</Text>
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
        >
          حذف
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardItem;


