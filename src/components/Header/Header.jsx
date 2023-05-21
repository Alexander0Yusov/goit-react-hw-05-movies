import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <ul>
        <li>
          <Link to="movies">Movies</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
