import React, { useState, useContext } from "react";
import { transContext } from "../context/TransactionContext";

const AddTransaction = () => {
	const [desc, setdesc] = useState("");
	const [amount, setamount] = useState(0);
	const { addTransaction } = useContext(transContext);

	const onSubmit = (e) => {
		e.preventDefault();
		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			desc,
			amount: +amount,
		};
		addTransaction(newTransaction);
	};

	return (
		<div className="addTransaction">
			<h4>Add Transaction</h4>
			<form onSubmit={onSubmit}>
				<label>
					<strong>Description</strong>
				</label>
				<input
					type="text"
					value={desc}
					onChange={(e) => {
						setdesc(e.target.value);
					}}
					placeholder="Exter text..."
					required
				/>
				<label>
					<strong>Amount</strong>
				</label>
				<input
					type="number"
					value={amount}
					onChange={(e) => {
						setamount(e.target.value);
					}}
					placeholder="Enter amount..."
					required
				/>
				<button className="btn">Add transaction</button>
			</form>
		</div>
	);
};

export default AddTransaction;
