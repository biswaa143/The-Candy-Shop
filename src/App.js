import Header from "./components/layout/Header";
import AddCandy from "./components/Candys/AddCandy";
import CandyProvider from "./store/CandyProvider";

function App() {
  return (
    <CandyProvider>
      <Header></Header>
      <main>
        <AddCandy />
      </main>
    </CandyProvider>
  );
}

export default App;