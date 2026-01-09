import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { TrackOrderPage } from "./pages/TrackOrderPage";
import { OrderStep1Measurements } from "./pages/order/OrderStep1Measurements";
import { OrderStep2Designs } from "./pages/order/OrderStep2Designs";
import { OrderStep3Contact } from "./pages/order/OrderStep3Contact";
import { OrderStep4Review } from "./pages/order/OrderStep4Review";
import { OrderStep5Confirmation } from "./pages/order/OrderStep5Confirmation";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/track" element={<TrackOrderPage />} />
          <Route path="/order" element={<OrderStep1Measurements />} />
          <Route path="/order/designs" element={<OrderStep2Designs />} />
          <Route path="/order/contact" element={<OrderStep3Contact />} />
          <Route path="/order/review" element={<OrderStep4Review />} />
          <Route
            path="/order/confirmation"
            element={<OrderStep5Confirmation />}
          />
          {/* More order steps will be added here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
