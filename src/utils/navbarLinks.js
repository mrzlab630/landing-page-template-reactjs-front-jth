import React from 'react';
import { Link } from 'react-router-dom';

const blackColor = {
  color: '#000'
}

export const navbarLinks = [
  {
    key: 'Projects',
    value: 'Projects',
    content: (
      <Link to={`${process.env.PUBLIC_URL}`} style={blackColor}>
        Projects
      </Link>
    )
  },
  {
    key: 'Messages',
    value: 'Messages',
    content: (
      <Link to={`${process.env.PUBLIC_URL}`} style={blackColor}>
        Messages
      </Link>
    )
  },
  {
    key: 'Reports',
    value: 'Reports',
    content: (
      <Link to={`${process.env.PUBLIC_URL}/activity`} style={blackColor}>
        Reports
      </Link>
    )
  },
  {
    key: 'Account Settings',
    value: 'Account Settings',
    content: (
      <Link to={`${process.env.PUBLIC_URL}/settings`} style={blackColor}>
        Account Settings
      </Link>
    )
  },
  {
    key: 'Payments',
    value: 'Payments',
    content: (
      <Link to={`${process.env.PUBLIC_URL}/payments`} style={blackColor}>
        Payments
      </Link>
    )
  },
  {
    key: 'Billing',
    value: 'Billing',
    content: (
      <Link to={`${process.env.PUBLIC_URL}/billing`} style={blackColor}>
        Billing
      </Link>
    )
  },
  {
    key: 'Weekly Summary',
    value: 'Weekly Summary',
    content: (
      <Link to={`${process.env.PUBLIC_URL}/summary`} style={blackColor}>
        Weekly Summary
      </Link>
    )
  }
]