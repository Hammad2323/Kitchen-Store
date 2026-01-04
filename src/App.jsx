import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
return (
<Router>
<div className="flex flex-col min-h-screen bg-gray-100">
<Navbar />


<main className="flex-grow">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<Terms />} />
</Routes>
</main>


<Footer />
</div>
</Router>
);
};


export default App;