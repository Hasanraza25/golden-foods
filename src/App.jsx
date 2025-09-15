import HomePage from "./pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // animation duration (ms)
  once: true,     // animate only once
});



export default function App() {
  return(
    <div className="">
      <HomePage />
    </div>
  )
}
