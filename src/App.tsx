import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
          <p className="mt-2 text-gray-600">Discover our handpicked selection of premium products</p>
        </header>
        <ProductGrid />
      </main>
      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">© 2024 ShopHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;