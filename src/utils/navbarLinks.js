import React from 'react';
import { Link } from 'react-router-dom';

const blackColor = {
  color: '#000'
}

const whiteColor = {
  color: '#FFFFFF'
}

const button = {
  background: '#FFFFFF',
  color:'#EF6722',
  textAlign:'center',
  fontSize:'14px',
  borderRadius:'4px',
  padding:'10px',
}

export const navbarLinks = [
  {
    key: 'HowItWorks',
    value: 'How it works',
    content: (
      <Link to={`/How-It-Works`} style={whiteColor}>
        How it works
      </Link>
    )
  },
  {
    key: 'Freelancers',
    value: 'Freelancers',
    content: (
      <Link to={`/Freelancers`} style={whiteColor}>
        Freelancers
      </Link>
    )
  },
  {
    key: 'Login',
    value: 'Login',
    content: (
      <Link to={`/Login`} style={whiteColor}>
        Login
      </Link>
    )
  },
  {
    key: 'SignUp',
    value: 'Sign Up',
    content: (
        <Link to={`/SignUp`} style={whiteColor}>
          Sign Up
        </Link>
    )
  },
  {
    key: 'PostaJob',
    value: 'Post a Job',
    content: (
        <Link to={`/Post-a-Job`} style={button}>
          Post a Job
        </Link>
    )
  },

]