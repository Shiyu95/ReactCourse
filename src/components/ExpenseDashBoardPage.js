import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashBoardPage =()=>(
    <div>
     <ExpensesSummary />
     <ExpenListFilters />
     <ExpenseList />
    </div>
  );

  export default ExpenseDashBoardPage;