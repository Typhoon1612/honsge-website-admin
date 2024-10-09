import { Button } from "@arco-design/web-react";
import Login from "../login";
import { useEffect, useState } from "react";
import GetCustomer from "../getCustomer";
import EditCustomer from "../editCustomer";

function Lobby() {
  //USESTATE
  //Change to what page to using useState
  const [customerID, setCustomerID] = useState<Number>(0);
  const [canLogin, setCanLogin] = useState<boolean>(false);
  const [customerExist, setCustomerExist] = useState<boolean>(false);
  const [pageState, setPageState] = useState<string>("Login");

  //USEEFFECT
  useEffect(() => {
    if (canLogin === true) {
      setPageState("GetCustomer");
      console.log("I am ", pageState);
    }
  }, [canLogin]);
  useEffect(() => {
    if (customerExist === true) {
      setPageState("EditCustomer");
      console.log("I am ", pageState);
    }
  }, [customerExist]);

  //FUNCTION
  const handleLoginInfo = (customerLoginInfo: boolean, customerID: Number) => {
    console.log("Handling: " + customerLoginInfo)
    setCustomerExist(customerLoginInfo);
    setCustomerID(customerID);
  };
  return (
    <div>
      {pageState === "Login" && <Login setCanLogin={setCanLogin} />}
      {pageState === "GetCustomer" && (
        <GetCustomer customerLoginInfo={handleLoginInfo} />
      )}
      {pageState === "EditCustomer" && (
        <EditCustomer customerID={customerID} />
      )}
    </div>
  );
}

export default Lobby;
