import React from "react";

const TableHeader = ({ columnNames }) => {
  return (
    <thead className="accountsTable__header">
      <tr>
        {columnNames.map((name, idx) => (
          <th key={idx}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
