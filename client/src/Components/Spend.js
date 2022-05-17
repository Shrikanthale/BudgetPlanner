import React, { useContext } from 'react';
import expanse from './Image/expanse.png'
import { useSelector } from 'react-redux';

const Spend = () => {
    const { expenses } = useSelector((state) => state.AppReducer);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0)

    return (
        <>
            <div className="alert alert-light box">
                <img src={expanse} alt="img" /><br />
                <span className="span">Expenses:&#8377;{totalExpenses}</span>
            </div>

        </>
    )
}

export default Spend;