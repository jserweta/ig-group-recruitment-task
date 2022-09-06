import TableHeader from "./TableHeader";
import ReactLoading from "react-loading";
import TableRow from "./TableRow";
import "../sass/components/table.scss";
import "../sass/components/loadingInfo.scss";
import { useApi } from "../hooks/useApi";
import { COLUMN_NAMES } from "../constants/table";

const Table = () => {
  const { data, isLoading, error } = useApi();

  return (
    <div className="container">
      <table className="accountsTable">
        <TableHeader columnNames={COLUMN_NAMES} />
        <tbody className="accountsTable__body">
          {data &&
            data[0].map((account) => {
              return (
                <TableRow
                  key={account.id}
                  accountData={account}
                  accountTypes={data[1]}
                />
              );
            })}
        </tbody>
      </table>

      {isLoading && (
        <div className="loadingInfo">
          <ReactLoading
            type="spinningBubbles"
            color="#808080"
            height={50}
            width={50}
          />
        </div>
      )}

      {error !== null && (
        <div className="loadingInfo">
          <h2>Error! Data fetching failure!</h2>
        </div>
      )}
    </div>
  );
};

export default Table;
