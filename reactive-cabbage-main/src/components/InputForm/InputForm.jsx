import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addIncome, addExpense } from 'redux/transactions/operation';


export const InputForm = () => {
    const dispatch = useDispatch();
    const [elementCategory, setElementCategory] = useState('Category');
    const location = useLocation();

    let categoryArray;
    let functionToDispatch;
    const ref = useRef(null);
    if (location.pathname === '/home/income' || location.pathname === '/income') {
        categoryArray = ['Salary', 'Additional income'];
        functionToDispatch = addIncome;
    }
    if (location.pathname === '/home/expenses' || location.pathname === '/expenses') {
        categoryArray = [
            'Transport',
            'Products',
            'Health',
            'Alcohol',
            'Entertainment',
            'Housing',
            'Technique',
            'Communal, communication',
            'Sports, hobbies',
            'Education',
            'Other',
        ];
        functionToDispatch = addExpense;
    }

    const handleCategoryChange = (e) => {
        e.preventDefault();
        const { descr, sum } = e.target.elements;
        let transValue = sum.value;

        if(descr.value === '') {
            alert('Please enter description');
            return;
        }

        if (elementCategory === 'Category') {
            alert('Please select a category');
            return;
        }

        if (transValue < 0) transValue = -transValue;

        dispatch(functionToDispatch(descr.value, transValue));
        e.target.reset();
        setElementCategory('Category');
    };

    const handleReset = (e) => {
        ref.current.reset();
    };

    return (
        <div>
            <form onSubmit={handleCategoryChange} ref={ref}>
                <div>
                    <input placeholder='Product description' name="decr" />
                    <select categoryArray={categoryArray}
                        elementCategory={elementCategory}
                        setElementCategory={setElementCategory}
                    />
                    <input type='number' placeholder='Amount' name="sum" />
                    
                </div>
                <div>
                    <button type='submit'>Input</button>
                    <button type="button" onClick={handleReset}>Clear</button>
                </div>
            </form>
        </div>
    )
};