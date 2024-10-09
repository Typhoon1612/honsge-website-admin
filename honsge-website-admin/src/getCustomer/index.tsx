import { Button, Form, Input } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface LoginInfoProps {
  customerLoginInfo: (canLogin: boolean, customerID: Number) => void;
}

function GetCustomer({ customerLoginInfo }: LoginInfoProps) {
  //USE STATE
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [canLogin, setCanLogin] = useState<boolean>(false);
  const [customerID, setCustomerID] = useState<Number>(0);

  //USE EFFECT
  useEffect(() => {
    sendToMain(canLogin);
  }, [canLogin]);

  //FUNCTION
  const sendToMain = (canLogin: boolean) => {
    customerLoginInfo(canLogin, customerID);
    console.log("From GetCustomer: " + customerID);
  };

  //AXIOS FUNCTION
  const HandleCustomerLoginInfo = async (phoneNumber: string) => {
    const payload = {
      phoneNumber: phoneNumber,
    };
    try {
      const response = await axios.post(
        "http://localhost:8801/CheckCustomerLoginInfo",
        payload
      );
      if (response.data.message === "Data Exist") {
        setCanLogin(true);
        setCustomerID(response.data.customer_id);
      } else if (response.data.message === "Data doesn't Exist") {
        setCanLogin(false);
        alert("Incorrect Phone Number or Password");
      } else {
        setCanLogin(false);
        setCustomerID(response.data.customer_id);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className=" w-[40%] py-12">
          <Form
            className={`w-full shadow-md px-[10%]`}
            size={`small`}
            autoComplete="off"
            layout="vertical"
          >
            <h1 className="flex justify-center py-5 text-2xl font-black">
              Fill In Customer's Phone Number
            </h1>
            <Form.Item label="Phone Number" className={`text-sm  `}>
              <Input
                placeholder="Enter Phone Number"
                className="w-[100%]"
                onChange={(value) => {
                  setPhoneNumber(value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={() => HandleCustomerLoginInfo(phoneNumber)}
              >
                Find Customer
              </Button>
            </Form.Item>
            {/* <p className="pb-6">Haven't have an account yet? <span className="text-[#1a43bf] underline cursor-pointer">Sign Up</span></p> */}
          </Form>
        </div>
      </div>
    </>
  );
}
export default GetCustomer;
