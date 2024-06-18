import { Form, Input } from "@arco-design/web-react"

function EditCustomer() {
    return(
        <>
            <div className="h-full flex items-center justify-center">
                <div className="flex w-[80%] px-20 h-[90%] py-12 flex-col shadow-2xl">
                    <div className="flex justify-center pb-20 pt-5">
                        <h1 className="font-black text-4xl">General Information</h1>
                    </div>
                    <Form layout="vertical" className={`flex flex-row justify-between  h-full`}>
                    <div className="w-[35%]" >
                    <Form.Item label="Name" >
                        <Input />
                    </Form.Item>
                    
                    </div>
                    <div className="w-[35%]">
                    <Form.Item label="Phone Number" >
                        <Input  />
                    </Form.Item>
                    
                    </div>      
                    {/* <Button onClick={()=> UpdateCustomerInfo(customerInfo)}>Update</Button>     */}
                
            </Form>
            </div>
        </div>
    </>
    )
}

export default EditCustomer;
{/* value={customerInfo[0]?.phone_number} className={`bg-white`} onChange={
                            (value)=> {
                                setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, phone_number: value } : customers))}} */}

{/* value={customerInfo[0]?.customer_name} className={`bg-white`} onChange={
                            (value)=> {
                                setCustomerInfo(prevCustomerInfo => prevCustomerInfo.map((customers, index)=>index === 0 ? { ...customers, customer_name: value } : customers))}}  */}