import { Form, Input } from "@arco-design/web-react";
import axios from "axios";
import { useEffect, useState } from "react";

interface MainPageProps {
  customerID: Number;
}

interface CustomerInfo {
  customer_id: Number;
  customer_name: string;
  age: Number;
  email: string;
  phone_number: string;
  gender: string;
  university: string;
  created_time: string;
}

function EditCustomer({ customerID }: MainPageProps) {
  //USESTATE
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo[]>([]);
  const [points, setPoints] = useState<string>("");

  //USEEFFECT
  useEffect(() => {
    FetchCustomerInfo(customerID);
  }, [customerID]);
  useEffect(() => {
    FetchPoints(customerID);
  }, [customerID]);
  useEffect(() => {
    console.log(points);
    UpdatePoints(customerID, points);
  }, [points]);

  //AXIOS BACKEND
  const FetchCustomerInfo = async (customerID: Number) => {
    const payload = {
      customerID: customerID,
    };
    try {
      const response = await axios.post(
        "http://localhost:8801/FetchCustomerInfo",
        payload
      );
      console.log(response);
      setCustomerInfo(response.data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const FetchPoints = async (customerID: Number) => {
    try {
      const response = await axios.get(
        `http://localhost:8801/FetchPoints?customerID=${customerID}`
      );
      setPoints(response.data[0].points.toFixed(2));
      console.log("From Points", typeof(response.data[0].points.toFixed(2)));
    } catch (err) {
      console.log("Error", err);
    }
  };

  const UpdatePoints = async (customerID: Number, points: string) => {
    const payload = {customerID, points};
    try {
      const response = await axios.put(
        "http://localhost:8801/UpdatePoints",
        payload
      );
      console.log(response);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <>
      <div className="h-full flex items-center justify-center">
        <div className="flex w-[80%] px-20 h-[90%] py-12 flex-col shadow-2xl">
          <div className="flex justify-center pb-20 pt-5">
            <h1 className="font-black text-4xl">General Information</h1>
          </div>
          <Form
            layout="vertical"
            className={`flex flex-row justify-between  h-full`}
          >
            <div className="w-[35%]">
              <Form.Item label="Name">
                <Input
                  value={customerInfo[0]?.customer_name}
                  className={`bg-white`}
                />
              </Form.Item>
            </div>
            <div className="w-[35%]">
              <Form.Item label="Phone Number">
                <Input
                  value={customerInfo[0]?.phone_number}
                  className={`bg-white`}
                />
              </Form.Item>
            </div>
            <div className="w-[35%]">
              <Form.Item
                label="Points"
                className={`w-full h-[6.5rem] text-[4rem] bg-white font-bold`}
              >
                <Input
                  value={`${points}`}
                  onChange={(value) => {
                    setPoints(value);
                  }}
                />
              </Form.Item>
            </div>
            {/* <Button onClick={()=> UpdateCustomerInfo(customerInfo)}>Update</Button>     */}
          </Form>
        </div>
      </div>
    </>
  );
}

export default EditCustomer;
{
  /* value={customerInfo[0]?.phone_number} className={`bg-white`} onChange={
                            (value)=> {
                                setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, phone_number: value } : customers))}} */
}

{
  /* value={customerInfo[0]?.customer_name} className={`bg-white`} onChange={
                            (value)=> {
                                setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, customer_name: value } : customers))}}  */
}
