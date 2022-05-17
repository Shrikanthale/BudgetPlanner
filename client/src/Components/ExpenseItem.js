import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { DELETE_EXPENSE } from '../store/type';
import axios from 'axios';

const ExpenseItem = ({ id, name, cost }) => {
    const dispatch = useDispatch();
    // const id = props.id;
    // console.log(id);

    const deleteExpense = async () => {
        const data = await axios.delete(`http://localhost:8000/delete/${id}`);
        // dispatch({
        //     type: DELETE_EXPENSE, payload: props.id,
        // })
    };

    return (
        <>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                {name}
                <div style={{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
                    <p>{moment().format('MM/DD/YYYY')}</p>
                    <span className='budge budge-primary budge-pill mr-3'>&#8377;{cost}</span>
                    <TiDelete size='1.5em' style={{ cursor: 'pointer' }} onClick={deleteExpense} />
                </div>
            </li>
        </>
    )
}

export default ExpenseItem;