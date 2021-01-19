import React, { useContext } from "react";
import { transContext } from "../context/TransactionContext";

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(transContext);
	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<div>
			<li className={transaction.amount < 0 ? "minus" : "plus"}>
				{transaction.desc}{" "}
				<span>
					{sign}${Math.abs(transaction.amount)}
				</span>
				<button
					onClick={() => deleteTransaction(transaction.id)}
					className="delete-btn"
				>
					x
				</button>
			</li>
		</div>
	);
};

export default Transaction;
