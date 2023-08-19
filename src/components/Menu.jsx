
import { NavLink } from 'react-router-dom'; // Import NavLink
import  navLinks  from '../data/navLinks'; // Adjust the file path as needed

const Menu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-frost">
      {navLinks.map(link => (
        <NavLink
          key={link.url}
          to={link.url}
          className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-text focus:outline-none focus:text-text focus:bg-primary uppercase"
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Menu;
