import "./App.css";
import Header from "./components/shared/Header";
import { Routes, Route } from "react-router-dom";
import ToDo from "./components/To-Do";
import CompleteTask from "./components/CompleteTaks";
import Calender from "./components/Calender";
import NotFound from "./components/NotFound";
import Footer from "./components/shared/Footer";
function App() {
  return (
    <main className="max-w-[1100px] mx-auto text-white ">
      <Header />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
