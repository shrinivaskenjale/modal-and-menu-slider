import "./App.css";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <PageContent />
    </div>
  );
}
