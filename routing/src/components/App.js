import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="first" element={<FirstPage />} />
          <Route path="second" element={<SecondPage />} />
          <Route path="third" element={<ThirdPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
