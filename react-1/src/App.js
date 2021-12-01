import Content from "./components/Content";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
