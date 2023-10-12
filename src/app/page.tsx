// pages/index.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Welkom bij de FanWiki voor Snowfall</h1>
        {/* Voeg hier inhoud toe */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
