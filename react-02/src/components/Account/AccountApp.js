//

import React, {Component} from 'react';

import AccountList from './AccountList'
import AccountControl from './AccountControl';
import {Account, AccountController} from '../../BLL/Account/Account.js'


class AccountApp extends Component{
    constructor(){
        super()
        this.state={
            accountList: [],
            total: 0,
            highestAccount: {accountName: "", balance: 0, key: null},
            lowestAccount: {accountName: "", balance: 0, key: null},
            newAccount: {accountName: "", balance: 0, key: null},
        }
        this.accountCtrl = new AccountController();
        this.createAccount = this.createAccount.bind(this);
    }
    
    UNSAFE_componentWillMount(){

        if(this.accountCtrl.accounts.length>=1){
        let highest = this.accountCtrl.getHighestValuedAccount();
        let lowest = this.accountCtrl.getLowestValuedAccount();

        this.setState({
            accountList: this.accountCtrl.accounts,
            total: this.accountCtrl.getAccountTotal,
            highestAccount: {
                accountName: highest.accountName,
                balance: highest.balance,
                key: highest.key
            },
            lowestAccount:  {
                accountName: lowest.accountName,
                balance: lowest.balance,
                key: lowest.key
            }
        });};

    }
    createAccount=(e)=>{
        this.accountCtrl.createAccount(this.state.newAccount.accountName, this.state.newAccount.balance);

        this.setState({
            AccountList: this.accountCtrl.accounts
        })
        e.preventDefault();
        e.stopPropagation();

    }
    handleChange(e) { 
        const { newAccount } = { ...this.state };
        const account = newAccount;
        const { name, value } = e.target;
        account[name] = value;
        this.setState({ newAccount: {
                accountName: newAccount.accountName,
                balance: newAccount.balance,
                key: newAccount.key
            }});
    }

    handleDelete = (key)=>{
        this.accountCtrl.removeAccount(key); this.setState({
            AccountList: this.accountCtrl.accounts
        })

    }


    render(){
        return(
            <div className="account-app">
                <h2>Accounts</h2>
                <div>
                    <AccountControl onCreate={this.createAccount} onChange={this.handleChange} newAccount={this.state.newAccount} />
                </div>
                <div>
                    <h2>Accounts total: <span>{this.state.total}</span></h2>
                    <h2>Largest account: <span>{this.state.highestAccount.accountName}</span><span>{this.state.highestAccount.balance}</span></h2>
                    <h2>Smallest account: <span>{this.state.lowestAccount.accountName}</span><span>{this.state.lowestAccount.balance}</span></h2>
                </div>
                <div>
                    <AccountList accountList = {this.state.accountList} handleDelete={this.handleDelete}/>
                </div>
            </div>
        )
    }

}
export default AccountApp;