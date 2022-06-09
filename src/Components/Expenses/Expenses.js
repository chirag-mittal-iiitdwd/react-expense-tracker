import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filterYear,setFilterYear]=useState('2020');

  const filterChangeHandler=(selectedYear)=>{
    setFilterYear(selectedYear);
  }

  const filtedExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} onChangeFilter={filterChangeHandler}/>
      {
        filtedExpenses.length===0 ? <p>No Expenses Found</p>:
        filtedExpenses.map((item)=>(
          <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
        ))
      }
    </Card>
  );
}

export default Expenses;