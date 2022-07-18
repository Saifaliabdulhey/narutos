import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../../selectors/expenses'
import DesktopListItem from './DesktopListItem'



export const AppleList = (props) => (
    <div>
   
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No products</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <DesktopListItem key={expense.id} {...expense} />
                    })
                )
            }
    
    </div>
)
const mapStateToPraps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};
export default connect(mapStateToPraps)(AppleList);

