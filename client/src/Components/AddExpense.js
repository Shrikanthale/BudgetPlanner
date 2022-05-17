import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../store/method';

const AddExpense = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		setName('');
		setCost('');
		dispatch(createAction({
			name,
			cost
		}));
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpense;