
import CardWrapper from "../card-wrapper/CardWrapper";

function ListUsers() {
  return (
    <div className="flex flex-col gap-3 w-1/2">
      <h3 className="font-bold text-lg text-center">لیست کاربران</h3>
      <CardWrapper/>
    </div>
  );
}

export default ListUsers;
