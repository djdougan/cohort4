import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, act } from '@testing-library/react';    
import AccountControl from '../components/Account/AccountControl';
import {Account, AccountController} from '../BLL/Account/Account';


describe('Test submit component', () => {
  it('Test click event', () => {
    const mockCreateAccount = jest.fn();
    const mockHandleChange = jest.fn();

    const accCtrl = new AccountController();
        accCtrl.createAccount("Checking", 100, 1);
    const acc = accCtrl.getAccount(1);
    
    render(<AccountControl 
        onCreate={mockCreateAccount} 
        onChange={mockHandleChange} 
        newAccount={acc} 
        />)
    

  // This should be the default page
//   screen.getByText(/peoplelist/i);




  });
});