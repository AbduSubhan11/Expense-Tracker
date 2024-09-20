import "./App.css";
import Form from "../Components/Form";
import Table from "../Components/Table";
import expensesData from "../expensesData";
import { useLocalStorage } from "../Hook/UseLocalStorage";

function App() {
  
  const [expenses, setExpenses] = useLocalStorage("expenses", expensesData);

  return (
    <>
      <h1 className="sm:text-[3vw] text-[7vw] sm:py-0 py-5 text-white bg-[#1A202C] font-bold font-serif text-center ">
        Track Your Expense
      </h1>
      <main className="grid md:grid-cols-2 grid-cols-1 mt-10">
        <Form setExpenses={setExpenses} />
        <Table expenses={expenses} setExpenses={setExpenses} />
      </main>
    </>
  );
}

export default App;
