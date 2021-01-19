import "./App.css";
import TransactionProvider from "./context/TransactionContext";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";

function App() {
	return (
		<TransactionProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<hr />
				<History />
				<hr />
				<AddTransaction />
			</div>
		</TransactionProvider>
	);
}

export default App;
