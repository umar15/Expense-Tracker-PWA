import React, { useContext } from "react";
import { transContext } from "../context/TransactionContext";
import Transaction from "./Transaction";

const History = () => {
	const { transactions } = useContext(transContext);

	return (
		<div className="history">
			<h4>History</h4>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</div>
	);
};

export default History;
