import Link from "next/link";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/catalog">
            <a>Catalog</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
