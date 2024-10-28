import { globalStyles } from '../assets/styles/globalStyles';

const Header = () => {
  return (
    <header className={`p-4 shadow-md ${globalStyles.bgDark}`}>
      <div className={`${globalStyles.container} flex justify-between items-center`}>
        <h1 className="text-white text-xl font-bold">Digigo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white">Home</a></li>
            <li><a href="/profile" className="text-white">Profile</a></li>
            <li><a href="/products" className="text-white">Products</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
