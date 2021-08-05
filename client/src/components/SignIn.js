import React, { useState } from "react";
import './Sing.css';

import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/ActionAuth";
import Layout from './Layout';
  import { useHistory } from "react-router-dom";
// import { Redirect } from "react-router-dom";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const { loading, token } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
   const history = useHistory()

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login({  email, password },history));
  };

  return (
    <div className="all">
      <div className="one">
        <Layout /> 
        </div>
        <img style={{ height: "900px",width: "500px",marginRight:"40px", paddingBottom:"200px",marginLeft: "20px"}}
          src="https://media.istockphoto.com/photos/africanamerican-man-browsing-work-online-using-job-search-computer-picture-id918365088?k=6&m=918365088&s=612x612&w=0&h=E-AoOKzMNzvmiYjtEHtWwThKqaqPJ-tU_kH8c747PRc="
          alt=""
        />
      <div className="two">
    <Form 
      name="basic"
      labelCol={{
        span: 8,
        
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed} 
      style={{ width: "-50px", height:"-100px",paddingTop:"150px",marginLeft: "50px",marginRight:"40px"}} >
       <h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        onChange={(e) => setEmail(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        onChange={(e) => setPassword(e.target.value)}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handelSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>


    </div>
   
   
  </div> 

    
  );
  
};

export default SignIn
