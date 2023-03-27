import React from 'react';
import PropTypes from 'prop-types';
import {Table, Thead, Tr, Th, Tb, Td, Type } from './TransactionHistory.styled'; 

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tb>
        {items.map(item => {
          return (
            <Tr key={item.id} id={item.id}>
              <TableData
                type={item.type}
                currency={item.currency}
                amount={item.amount}
              />
            </Tr>
          );
        })}
      </Tb>
    </Table>
  );
};

const TableData = ({ type, amount, currency }) => {
  return (
    <>
      <Type>{type}</Type>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};