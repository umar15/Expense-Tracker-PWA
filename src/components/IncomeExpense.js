import React, { useContext } from "react";
import { transContext } from "../context/TransactionContext";

const IncomeExpense = () => {
	const { transactions } = useContext(transContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);
	const expense = (
		amounts
			.filter((item) => item < 0)
			.reduce((acc, item) => (acc += item), 0) * -1
	).toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>
					INCOME <br />
				</h4>
				<h2 className="money plus">+${income}</h2>
			</div>
			<div>
				<h4>
					EXPENSE <br />
				</h4>
				<h2 className="money minus">+${expense}</h2>
			</div>
		</div>
	);
};

export default IncomeExpense;
