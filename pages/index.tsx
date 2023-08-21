import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-blue-500">
      <Header />
      <main className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 transition duration-300 ease-in-out hover:text-white-500">
          Manny
        </h1>
        {/* Your content here */}
      </main>
      <Footer />
    </div>
  );
};
