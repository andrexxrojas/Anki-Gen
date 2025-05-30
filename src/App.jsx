// React imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Imports
import PageLayout from "./components/PageLayout/PageLayout";
import Home from "./pages/home";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree.jsx";


function App() {
  return (
    <div className="app-container">
      <PageLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/step-one" element={<StepOne/>}/>
            <Route path="/step-two" element={<StepTwo/>}/>
            <Route path="/step-three" element={<StepThree/>}/>
          </Routes>
        </Router>
      </PageLayout>
    </div>
  )
}

export default App;