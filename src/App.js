import { useState } from "react";
import "./App.css";
import About from "./About";
import FormInput from "./components/FormInput";
import NavBar from "./components/NavBar";
 import {Route, Routes } from "react-router-dom"
 import Header from "./components/Header";
 import Contact from "./components/Contact";


const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "date of birth",
      type: "date",
      placeholder: "Date of Birth",
      label: "Date of Birth",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        " should be 8-20 characters and include at least 1 letter, 1 number and 1special character!",
      label: "Password",
     
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Membership Registration</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      <NavBar/>
      <Header/>
      <Routes>
        
        <Route exact path ="/about" element={<About/>} /> 
        <Route exact path ="/contact" elementent={<Contact/>} />
        <Route exact path ="/home" element={<FormInput/>} />
       </Routes>
    </div>
  );
  // return(
  //     <div className="App">
  //       <NavBar/>
  //       <Route exact path ="/" component={Home} />
  //       <Route exact path ="/" component={About} /> 
  //       <Route exact path ="/" component={FormInput} /> 
        
  //     </div>
  // );
}

export default App;