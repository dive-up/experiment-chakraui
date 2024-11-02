import { Provider } from "./components/ui/provider";
import Header from "./custom_components/Header";
import Hero from "./custom_components/Hero";
import Features from "./custom_components/Features";
import Testimonial from "./custom_components/Testimonial";
import Footer from "./custom_components/Footer";

function App() {
  return (
    <Provider>
      {/* Header */}
      <Header />
      {/* HERO Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Testimonial Section */}
      <Testimonial />
      {/* Footer Section */}
      <Footer />
    </Provider>
  );
}

export default App;
