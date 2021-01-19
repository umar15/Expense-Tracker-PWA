import React, { useContext } from "react";
import { transContext } from "../context/TransactionContext";

const Balance = () => {
	const { transactions } = useContext(transContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<div className="balance">
			<h4>Your Balance</h4>
			<h1>${total}</h1>
		</div>
	);
};

export default Balance;
