import React, { useContext, useState } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import bud from './Image/bud.png'
import { useDispatch, useSelector } from 'react-redux';
import { SET_BUDGET } from '../store/type';

const Budget = () => {
	const dispatch = useDispatch();

	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		dispatch({
			type: SET_BUDGET,
			payload: localStorage.getItem('budget'),
		});
		setIsEditing(false);
	};

	return (
		<div className="alert alert-light box">
			<img src={bud} alt="img" /><br />
			<div class='p-3 d-flex align-items-center justify-content-between'>
				{isEditing ? (
					<EditBudget handleSaveClick={handleSaveClick} budget={localStorage.getItem('budget')} />
				) : (
					// For part 1 render component inline rather than create a seperate one
					<ViewBudget handleEditClick={handleEditClick} />
				)}
			</div>
		</div>
	)
}

export default Budget;