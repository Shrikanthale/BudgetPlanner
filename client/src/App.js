import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { AppProvider } from './Context/AppContext';
import Budget from './Components/Budget';
import Spend from './Components/Spend';
import ExpanseList from './Components/ExpanseList';
import AddExpense from './Components/AddExpense';
import RemainingBudget from './Components/Remaining';
import Background from './background/Backround';
import { Provider } from 'react-redux';
import Store from './store/index';

const App = () => {
	return (
		<Provider store={Store}>
			<Background />
			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<Spend />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpanseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpense />
					</div>
				</div>
			</div>
		</Provider>
	);
};

export default App;
