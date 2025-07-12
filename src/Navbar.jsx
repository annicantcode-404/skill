import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-800">MyApp</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/login" className="text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
