import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, act } from '@testing-library/react';
import AccountApp from '../components/Account/AccountApp';
import AccountControl from '../components/Account/AccountControl';
import {Account, AccountController} from '../BLL/Account/Account';

test("Test AccountCtrl",()=>{

    // const mockCreateAccountCallback = jest.fn();
    // const mockHandleChangeCallback = jest.fn();

    // create a People controller and a new person
    // const AccountCtrl = new AccountController();
    
    //     AccountCtrl.createAccount("Checking", 100.00, 1);
    //     AccountCtrl.createAccount("Saving", 200, 2);

    // Render the form
    // render(<AccountControl 
    //     onCreate={this.mockCreateAccountCallback} 
    //     onChange={this.mockHandleChangeCallback} 
    //     newAccount={this.state.newAccount}             
    //     />);

    // expect(getValue('account')).toBe('Checking');
    // expect(getValue('balance')).toBe('100');

    // // Trigger a save
    // click('Save');

    // // The save mock should have been called once
    // expect(mockSaveCallback.mock.calls.length).toBe(1);

    // // Grab the first parm sent to the mock save object (which should be the person to save)
    // const savePerson = mockSaveCallback.mock.calls[0][0];

    // // console.log(savePerson);
    // expect(savePerson.fname).toBe('Lorraine');
    // expect(savePerson.lname).toBe('Shumy');
    // expect(savePerson.company).toBe('LM');

    // // Trigger a cancel
    // click('Cancel');

    // // The cancel mock should have been called once
    // expect(mockCancelCallback.mock.calls.length).toBe(1);
})

// function updateValue(accountName, amount) {
//     document.querySelector(`[name=${name}]`).value = amount;
// }