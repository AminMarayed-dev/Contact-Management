import { User } from "../../api/users.api";
import CardWrapper from "../card-wrapper/CardWrapper";

function ListUsers({users}:{users:User[]}) {
  return (
    <div className="flex flex-col gap-3 w-1/2">
      <h3 className="font-bold text-lg text-center">لیست کاربران</h3>
      <CardWrapper users={users}/>
    </div>
  );
}

export default ListUsers;
