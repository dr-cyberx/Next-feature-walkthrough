"use client";

import React, { useState } from "react";
import {signIn} from 'next-auth/react'

const Form = () => {
  const [loginCreds, setLoginCreds] = useState<{[key:string]: string}>({
    email: "",
    password: "",
  });

  const onChange = (event: any) => {
    setLoginCreds((preData: any) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    signIn("credentials", {
      email: loginCreds.email,
      password: loginCreds.password,
    })
  }

  return (
    <div className="w-1/2 border-2 border-grey-50 rounded-md p-4 h-80">
      <form onSubmit={handleSubmit} className="flex flex-col  w-full h-full justify-around ">
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={onChange}
            className="outline-0 outline-transparent outline-none text-gray-900	p-2 rounded-md w-full"
            placeholder="Email..."
            name="email"
            value={loginCreds.email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={onChange}
            value={loginCreds.password}
            className="outline-0 outline-transparent outline-none text-gray-900	p-2 rounded-md w-full"
            placeholder="Password... "
            type="password"
            name="password"
          />
        </div>
        <button className="bg-blue-500 p-2 rounded-md" type="submit">
          Login
        </button>
        <button className="bg-transparent p-2 rounded-md" type="button" onClick={() => signIn('github')}>
          Login with Github
        </button>
      </form>
    </div>
  );
};

export default Form;
