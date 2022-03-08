import CustomLink from "./CustomLink"


const Navbar = () => {
  return (
    <nav>
        <CustomLink text="Home" href="/"></CustomLink>
        <CustomLink text="About" href="/about"></CustomLink>
        <CustomLink text="Contact" href="/contact"></CustomLink>
    </nav>
  )
}

export default Navbar