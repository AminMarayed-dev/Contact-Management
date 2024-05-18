import { useContext } from "react";

import CardItem from "../card/Card";
import { FromContext } from "../../context/FormContextProvider";
import { User } from "../../api/users.api";




function CardWrapper() {
  const {users} = useContext(FromContext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 shadow-["0px 5px 15px rgba(0, 0, 0, 0.35)"] p-2 bg-gray-200 min-h-[55vh] rounded-[8px]'>
      {users.length !== 0 ? users.map((user:User) => <CardItem user={user}/>) : <p>هیچ کارتی وجود ندارد</p>}
    </div>
  );
}

export default CardWrapper;

