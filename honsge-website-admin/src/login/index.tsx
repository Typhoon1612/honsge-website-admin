import { Button, Form, Input } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { useState } from "react";

interface LoginProps {
    setCanLogin : React.Dispatch<React.SetStateAction<boolean>>,
}

function Login( {setCanLogin} : LoginProps){
    //USESTATE
    //const [canLogin, setCanLogin] = useState<boolean>();

    return(
        <>
            <div className="flex justify-center items-center h-full">
                <div className=" w-[40%] py-12"> 
                    <Form className={`w-full shadow-md px-[10%]`} size={`small`} autoComplete='off' layout="vertical">
                    <h1 className="flex justify-center py-5 text-2xl font-black">Login/Sign Up</h1>
                    <Form.Item label='Phone Number' className={`text-sm  `}>
                        <Input placeholder='Enter Phone Number' className='w-[100%]' />
                    </Form.Item>
                    <Form.Item label='Password' className={`text-sm`}>
                        <Input placeholder='Enter Password' className='w-[100%]' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' onClick={()=>{setCanLogin(true)}}>Login</Button>
                    </Form.Item>
                    {/* <p className="pb-6">Haven't have an account yet? <span className="text-[#1a43bf] underline cursor-pointer">Sign Up</span></p> */}
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Login;