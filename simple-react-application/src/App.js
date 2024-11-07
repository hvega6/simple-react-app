import Content from "./src/Content";
import Footer from "./src/Footer";
import Header from "./src/Header";

function App() {
  return (
    <>
      <Header/>
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer/>
    </>
  );
}

export default App;