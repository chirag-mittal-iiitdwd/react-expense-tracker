import React,{useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

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
      <ExpensesChart expenses={filtedExpenses}/>
      <ExpenseList items={filtedExpenses} />
    </Card>
    </div>
  );
}

export default Expenses;