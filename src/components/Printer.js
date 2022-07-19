import React, { Component } from 'react'
import { connect } from 'react-redux';
import search from '../images/search.png'
import printers from '../printers';
import { setTextFilter, setKindFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';

export class Software extends React.Component {
 
   
    render() {
        return (
            <div>
                <div class="table-box">
                    <div class="table-row table-head">
                        <div class="table-cell first-cell">
                            <p>BRAND</p>
                        </div>
                        <div class="table-cell">
                            <p>MODEL</p>
                        </div>
                        <div class="table-cell last-cell">
                            <p>COLOR</p>
                        </div>
                        <div class="table-cell last-cell">
                            <p>QTY</p>
                        </div>
                        <div class="table-cell last-cell">
                            <p>PRICE</p>
                        </div>
                        <div class="table-cell last-cell">
                            <p>NOTE</p>
                        </div>
                    </div>
                </div>

                {
                    printers.map((item, index) => {
                        return <div class="table-row">
                            <div class="table-cell brand first-cell">
                                <p>xcvcxvcx</p>
                            </div>
                            <div class="table-cell">
                                <p>xcvcv</p>
                            </div>
                            <div class="table-cell last-cell">
                                <a href="https://youtu.be/99vHH_6F0Ko">{item.description}</a>
                            </div>
                            <div class="table-cell last-cell">
                                <a className='hz' href="https://youtu.be/99vHH_6F0Ko">cxvcxv</a>
                            </div>
                            <div class="table-cell last-cell">
                                <a href="https://youtu.be/99vHH_6F0Ko">vxcvx</a>
                            </div>
                            <div class="table-cell last-cell">
                                <a href="https://youtu.be/99vHH_6F0Ko">vxcvcx</a>
                            </div>
                        </div>

                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

    filters: state.filters,
    expenses: state.expenses
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setKindFilter: (kind) => dispatch(setKindFilter(kind)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapStateToProps, mapDispatchToProps)(Software);


