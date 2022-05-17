import React, { useContext } from 'react';
import rs from './Image/rs.png'
import { useSelector } from 'react-redux';

const Remaining = () => {
	const { expenses } = useSelector((state) => state.AppReducer);
	const budget = localStorage.getItem('budget');

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`box alert p-4 ${alertType}`}>
			<img src={rs} alt="img" /><br />
			<span className="span">Balance: &#8377;{budget - totalExpenses} </span>
		</div>
	);
};

export default Remaining;