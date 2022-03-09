import CustomLink from "./CustomLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((el, index) => (
        <CustomLink key={index} href={el.href} text={el.text} />
      ))}
    </nav>
  );
};

export default Navbar;
