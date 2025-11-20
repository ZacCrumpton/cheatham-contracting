// src/App.jsx
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar active="home" variant="home" />
      <main className="flex-1">
        <Home />
      </main>
      {/* Footer will go here later */}
    </div>
  );
}

export default App;
