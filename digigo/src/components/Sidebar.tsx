import { globalStyles } from '../assets/styles/globalStyles';

const Sidebar = () => {
  return (
    <aside className={`w-64 p-4 ${globalStyles.bgDark} text-white`}>
      <ul className="space-y-4">
        <li><a href="/dashboard" className="block">Dashboard</a></li>
        <li><a href="/products" className="block">Products</a></li>
        <li><a href="/history" className="block">History</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
