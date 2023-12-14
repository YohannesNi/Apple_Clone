import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AlertSection from "./components/Main/AlertSection";
import FirstSection from "./components/Main/FirstSection";
import SecondSection from "./components/Main/SecondSection";
import ThirdSection from "./components/Main/ThirdSection";
import FourthSection from "./components/Main/FourthSection";
import FifthSection from "./components/Main/FifthSection";
import SixthSection from "./components/Main/SixthSection";
import YouTubeVideos from "./components/Youtube/YouTubeVideos";

function App() {
  return (
    <div>
      <Header />
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <YouTubeVideos  />
      <Footer />
    </div>
  );
}

export default App;
