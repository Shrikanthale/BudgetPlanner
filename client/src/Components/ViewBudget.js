import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span className="span2">Budget: &#8377;{localStorage.getItem('budget')}</span>
			<button type='button' class='btn btn-primary span2' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
