import React,{useState}from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
 const [enterTitle, setEnterTitle]= useState('');
 const [enterAmount, setEnterAmount]= useState('');
 const [enterDate, setEnterDate]= useState('');

// const [userInput,setUserInput]=useState({
//     enterTitle: '',
//     enterAmount:'',
//     enterDate:''
// });
const titleChangeHandler = (event) =>{
setEnterTitle(event.target.value);
// setUserInput({
//     ...userInput,
//     enterTitle:event.target.value,
// });

// setUserInput((prevState)=>{
//     return{...prevState,enterTitle:event.target.value};
// });
};
const amountChangeHandler =(event) =>{
setEnterAmount(event.target.value)
// setUserInput({
//     ...userInput,
//     enterAmount:event.target.value,
// });
};
const dateChangeHandler = event =>{
setEnterDate(event.target.value);
// setUserInput({
//     ...userInput,
//     enterDate:event.target.value,
// });
};
const submitHandler=(event) =>{
    event.preventDefault();

    const expenseData = {
        title: enterTitle,
        amount : +enterAmount,
        date : new Date(enterDate),
    };
   
    props.onSaveExpenseData(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');

};
    
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__control'>
            <div className='new-expense__control'>
            <label> Title</label>
                <input type ='text' 
                value ={enterTitle} 
                onChange={titleChangeHandler} />
            </div>

            <div className='new-expense__control'>
             <label> Amount</label>
              <input type ='number' 
              min="0.01" step = "0.01"  
              value ={enterAmount}
              onChange={amountChangeHandler}/>
            </div>

            <div className='new-expense__control'>
            <label> Date</label>
               <input 
               type='date'
               min="2019-01-01" 
               max="2023-12-31" 
               value ={enterDate}
               onChange={dateChangeHandler} /> 
            </div>
           </div>

           <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel </button>
            <button type='submit'>Add Expense</button>
           </div>
        </form>
    ); 
};
export default ExpenseForm;