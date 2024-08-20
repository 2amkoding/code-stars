import React from 'react';
import Navbar from "../components/navbar";
import AccountFunction from '../components/account/AccountFunction'; 

export function Account() {
  return (
    <div>
      <Navbar />
      <h1>Account</h1>
      <AccountFunction />
    </div>
  );
}
