import React from "react";

const TableRow = ({ accountData, accountTypes }) => {
  const accountType = accountTypes.find(
    (acc) => acc.id === accountData.accountType
  );

  return (
    <tr>
      <td>{accountData.name}</td>
      <td>{`${accountData.currency} ${accountData.profitLoss}`}</td>
      <td>{accountType.title}</td>
    </tr>
  );
};

export default TableRow;
