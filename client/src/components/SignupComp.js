import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/ActionAuth";

import {
  Form,
  Input,
  Cascader,
  Select,
  Button,
} from "antd";
import Layout from './Layout';
import './Sing.css';
 import { Redirect } from "react-router-dom";

const { Option } = Select;
const addresss = [
  {
    value: "tunis",
    label: "tunis",
    children: [
      {
        value: "sfax",
        label: "sfax",
        children: [
          {
            value: "mahres",
            label: "mahres",
          },
        ],
      },
    ],
  },
  {
    value: "tunisia",
    label: "tunis",
    children: [
      {
        value: "sousse",
        label: "sousse",
        children: [
          {
            value: "nabel",
            label: "nabel",
          },
        ],
      },
    ],
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

const SignUp = () => {
   const {loading,users} = useSelector((state) => state);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
const userRole="Company"
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, phone,userRole,category, password, address}));
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
    src="https://www.monster.fr/recruter/conseil-en-ressources-humaines/wp-content/uploads/sites/13/2019/05/e53ad853b2ece39e4dc566f728b95493.png"
    alt=""
    />
    </div> 
     <div className="back">
         
     {
        loading ? (<h1>loading....</h1>
        ): users ? (<Redirect to="/login" />
         ) :(
    <Form  
      
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        address: ["tunis", "sfax", "mahres"],
        prefix: "216",
      }}
      scrollToFirstError
    >
        <h1>Registre company</h1>
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
        name="name"
        label="name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
        onChange={(e) => setName(e.target.value)}
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

export default SignUp;
