import React, { Component } from 'react';


class AccountCard extends Component{
   constructor(props){
       super(props);
        this.state={
            amount: "",
            balance: this.props.account.balance
        }
        this.handleDeposit= this.handleDeposit.bind(this);
        this.handleWithdrawal = this.handleWithdrawal.bind(this);
        this.handleChange = this.handleChange.bind(this);
   }

   handleDeposit=(e)=>{
       this.props.account.balance += parseInt(this.state.amount);
       this.setState({balance: this.state.amount})
   }

   handleWithdrawal=(e)=>{
       this.props.account.balance -= parseInt(this.state.amount);
       this.setState({balance: this.state.amount})
   }

   handleChange(e){
       this.setState({amount: parseInt(e.target.value)})
   }


   render(){
       return(
           <div className="account-card">
           <div >
                <div  className="ctrl-group">               
                    <h3>Account key:<span className="key">
                    {this.props.account.key}</span>
                    </h3>
                </div>   
                <div  className="ctrl-group">               
                    <h3>Account Name:<span>
                    {this.props.account.accountName}</span>
                    </h3>
                </div>            
                <div className="ctrl-group">
                    <h3>Account Balance:<span>  
                    {this.props.account.balance}</span>
                    </h3>   
                </div>
                <div className="top-right"><button onClick={ () => this.props.handleDelete(this.props.account.key)}>Delete</button></div>
           </div>
           <div className="ctrl-group">
                <div> <h3 className="ctrl-header">Deposit/Withdrawal amount</h3>              
                    <input type="text" value={this.state.amount} onChange={this.handleChange}/>
                </div>
                <div>               
                    <button onClick={this.handleDeposit}>Deposit</button>
                </div>
                <div>               
                    <button onClick={this.handleWithdrawal}>Withdrawal</button>
                </div>
           </div>
           </div>
       )
   }
}
export default AccountCard;
