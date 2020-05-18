import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, act, queryByTitle } from '@testing-library/react';    

import App from '../../../App';
import AccountCard from "../AccountCard.js";
import {Account, AccountController} from '../../../BLL/Account/Account.js';

it("captures clicks", () => {
    const AccCtrl = new AccountController();
    AccCtrl.createAccount("Checking", 100, 1);
    const mockDelete = jest.fn();
    const mockDeposit = jest.fn(); 
    const mockWithdrawal = jest.fn();

    const {getByText, getByTestId} = render(
        <AccountCard 
                    key ={AccCtrl.accounts[0].key}
                    account ={AccCtrl.accounts[0]}
                    handleDelete={mockDelete}
                    handleDeposit={mockDeposit}
                    handleWithdrawal={mockWithdrawal}
                    />
    );

    const input = screen.getByLabelText(/amount/i)
    input.value = "0"
});

// afterEach(cleanup);