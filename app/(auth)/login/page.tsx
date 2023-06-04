// "use client"
import React from 'react'
import axios from 'axios';

const Login = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(data)
  return (
    <div> {JSON.stringify(data)}</div>
  )
}

export default Login