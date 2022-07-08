import CustomMap from "./components/CustomMap";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <div className="w-[900px] h-[900px] max-w-[100vw] max-h-[100vh] p-4">
        <Card />
        <CustomMap />
      </div>
    </div>
  );
};

export default App;
