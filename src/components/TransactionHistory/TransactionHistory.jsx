

import PropTypes from 'prop-types';
import { TransactionTable, TableHeaders, TableRows, TableData } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
        <TransactionTable >
            <thead>
                <TableRows>
                <TableHeaders>Type</TableHeaders>
                <TableHeaders>Amount</TableHeaders>
                <TableHeaders>Currency</TableHeaders>
                </TableRows>
            </thead>

            <tbody>
                {items.map(el => (
                    <TableRows key={el.id}>
                    <TableData>{el.type}</TableData>
                    <TableData>{el.amount}</TableData>
                    <TableData>{el.currency}</TableData>
                    </TableRows>
                ))}  
            </tbody>
        </TransactionTable>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount:PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};