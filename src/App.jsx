import HomePage from "./pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // animation duration (ms)
  once: true, // animate only once
});

export default function App() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 relative">
      {/* Amazing Background Elements */}
    
      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        <HomePage />
      </div>
    </div>
  );
}
