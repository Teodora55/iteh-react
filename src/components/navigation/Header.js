import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              name="info"
              onClick={(event) => {
                props.goToPage(event.target.name);
              }}
            >
              O konferenici
            </a>
          </li>
          <li>
            <a
              name="signIn"
              onClick={(event) => {
                props.goToPage(event.target.name);
              }}
            >
              Prijavite se za konferenciju
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
