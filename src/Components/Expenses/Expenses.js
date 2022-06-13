import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
  const [filterYear,setFilterYear]=useState('2020');

  const filterChangeHandler=(selectedYear)=>{
    setFilterYear(selectedYear);
  }

  const filtedExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;
  });


  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseList items={filtedExpenses} />
    </Card>
    </div>
  );
}

export default Expenses;