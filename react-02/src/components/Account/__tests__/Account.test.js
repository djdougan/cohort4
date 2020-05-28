
import {Account, AccountController} from '../../../BLL/Account/Account.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, act } from '@testing-library/react';


import App from '../../../App'

describe('Account Test', () => {
    test("testing Account and AccountController", () => {
        let controller = new AccountController();
        controller.createAccount('checking', 10.00, 1);
        controller.createAccount('savings', 5.00, 2);
        controller.createAccount('investment', 15.00,3);
        expect(controller.getAccountTotal).toBe(30.00);
        expect(controller.getLowestValuedAccount()).toEqual({"accountName": "savings", "balance": 5, "key": 2});
        expect(controller.getHighestValuedAccount()).toEqual({"accountName": "investment", "balance": 15, "key": 3});

        let checking = controller.getAccount(1);
        expect(checking.toString()).toBe("{'key': '1', 'accountName': 'checking','balance': '10'}");


        expect(checking.getAccountNumber).toBe(1);
        expect(checking.getAccountName).toBe("checking");
        expect(checking.getBalance).toBe(10.00);
        checking.deposit(5.00);
        expect(checking.getBalance).toBe(15.00);
        checking.withdrawal(5.00);
        expect(checking.getBalance).toBe(10.00);

    });

});

describe('React test', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test("", async ()=>{
        const accounts = [
            {key:1, accountName: "Checking", "Balance": 5.00 },
            {key:2, accountName: "Saving", "Balance": 10.00 },
            {key:3, accountName: "Car Saving", "Balance": 10.00 }
        ];

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(accounts)
            })
        );
        await act(async ()=>{
            render(<App />)
        })

    });

});
