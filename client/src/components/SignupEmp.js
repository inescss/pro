
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/ActionAuth";

import {
  Form,
  Input,
  Cascader,
  Button,
  Select,
} from "antd";
import Layout from './Layout';
import './Sing.css';
 import { Redirect } from "react-router-dom";
 const { Option } = Select;

const addresss = [
  {
    value: "tunis",
    label: "tunis",
    
  },
  {
    value: "sfax",
    label: "sfax",
    
  },
  {
    value: "souse",
    label: "souse",
    
  },
  {
    value: "mestir",
    label: "mestir",
    
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignupEmp = () => {
   const {loading,users} = useSelector((state) => state);
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [field, setField] = useState("");
  const [category, setCategory] = useState("");

 
  

  const dispatch = useDispatch();
const userRole="Employee"
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(register({firstName,lastName,age,category , email, phone, password,userRole, address, field }));
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+216">+216</Option>
        <Option value="+213">+213</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="tow">
     
      <Layout />
   <div className="front">
      <img style={{ height: "1000px",width: "500px",marginRight:"20px", paddingBottom:"200px",marginLeft: "20px"}}
          src="https://static1.bigstockphoto.com/0/7/3/large1500/370557610.jpg"
          alt=""
        />
    </div> 
     <div className="back">
     {
        loading ? (<h1>loading....</h1>
        ): users ? (<Redirect to="/login" />
         ) :(
    <Form className="col-md-4"
      
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        address: ["tunis"],
        prefix: "216",
      }}
      scrollToFirstError
      style={{marginLeft:"60px"}}
    >
        <h1>Registre Employee</h1>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        onChange={(e) => setEmail(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        onChange={(e) => setPassword(e.target.value)}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    
      <Form.Item
        name="firstName"
        label="firstName"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your firstName!",
            whitespace: true,
          },
        ]}
        onChange={(e) =>  setFirstName(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="lastName"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your lastName",
            whitespace: true,
          },
        ]}
        onChange={(e) =>  setLastName(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="category"
        label="category"
        rules={[
          {
            required: true,
            message: "Please input your category!",
            whitespace: true,
          },
        ]}
        onChange={(e) => setCategory(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="location"
        label="location"
        rules={[
          {
            type: "array",
            required: true,
            message: "Please select your location",
          },
        ]}
        onChange={(e) => setAddress(e.target.value)}
      >
        <Cascader options={addresss} />
      </Form.Item>

      <Form.Item
        name="age"
        label="age"
        rules={[
          {
            required: true,
            message: "Please input your age!",
            
          },
        ]}
        onChange={(e) => setAge(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
        onChange={(e) => setPhone(e.target.value)}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="field"
        label="field"
        rules={[
          {
            required: true,
            message: "Please select field!",
          },
        ]}
        onChange={(e) => setField(e.target.value)}
      >
        <Select placeholder="select your field">
          <Option value="secretaire">secretaire</Option>
          <Option value="technicien">technicien</Option>
          <Option value="plombie">plombie</Option>
          <Option value="electretien">electretien</Option>
        </Select>
      </Form.Item>

     

      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={handelSubmit} >
          Register
        </Button>
      </Form.Item>
    </Form> 
          )}
 </div>
</div>
  
  );
};

export default SignupEmp;
