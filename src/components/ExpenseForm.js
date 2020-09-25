import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
                                                                                                                                                

//API terribl, complex
//const data = new Date();

const now = moment();
console.log(now.format('MMM Do, YYYY'));

//use constructor function to access props 
//if the state has information exeits. keep it
export default class ExpenseForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
      };
    }
    //two way to create sth was been tracked
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    //setup note state
    //setup onChange and value for textarea
    onNoteChange = (e) => {
       
        const note = e.target.value;
        this.setState(() => ({note}));

    };
    //only can type number have two dight decimal pointer
    //can highlight number and delete all number at once(!amount== empty string)
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({
                amount
            }));
        }
        
    };
    //check value: when it has date, then you can change it
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
        
    };

    onFocusChange = ({focused}) => {
        this.setState({calenderFocused:focused})

    }
    //when no description and amount, set error
    //when habe, submit the information witch need to connect addExpensepage by dispatch
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=> ({
                error:'please provide description and amount.'
            }));
        }else{
            this.setState(()=> ({error:''}));
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note

            });
            //clear the error

        }
    };
    render(){
        return (
        
            
            <form className="form" onSubmit ={this.onSubmit}>
                {this.state.error &&<p className='form__error'>{this.state.error}</p> } 
                <input 
                    className="text-input"
                    type = 'text'
                    placeholder = "Description"
                    autoFocus
                    value={this.state.description}
                    onChange = {this.onDescriptionChange}
                />
                <input 
                    type ='text'
                    className="text-input"
                    placeholder = 'Amount'
                    value = {this.state.amount}
                    onChange = {this.onAmountChange}
                />
                <SingleDatePicker
                 date = {this.state.createdAt}
                 onDateChange = {this.onDateChange}
                 focused = {this.state.calenderFocused}
                 onFocusChange = {this.onFocusChange}
                 numberOfMonths = {1}
                 isOutsideRange = {() => false }
                 />
                <textarea
                    className="textarea" 
                    placeholder ="Add a note for your expense (optional)"
                    value = {this.state.note}
                    onChange = {this.onNoteChange}
                ></textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
                
            </form>
     
        )

    }
}