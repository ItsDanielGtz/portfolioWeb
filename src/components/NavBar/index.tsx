import { Link, animateScroll as scroll } from "react-scroll";
function NavBar() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <header className="sticky w-full top-0 z-50 bg-background/80 backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {/* <CodeIcon className="w-6 h-6" /> */}
          <span onKeyUp={scrollToTop} >Portafolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <ul className="flex gap-6 items-center">
            <li className="">
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="hover:underline underline-offset-4"
              >
                Sobre mí
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:underline underline-offset-4"
              >
                Habilidades
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="active"
                to="proyectos"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="hover:underline underline-offset-4"
              >
                Proyectos
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:underline underline-offset-4"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        {/* <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button> */}
      </div>
      {/* <nav
      className="hidden md:flex items-center gap-6 text-sm font-medium"
      id="navbar"
    >
      <div className="flex  justify-between ">
        <div>
          <img
            src={logo}
            className="nav-logo"
            alt="Logo."
            onKeyDown={scrollToTop}
          />
        </div>
        <ul className="flex gap-5  items-center">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">Section 3</li>
          <li className="nav-item">Section 4</li>
          <li className="nav-item">Section 5</li>
        </ul>
      </div>
    </nav> */}
    </header>
  );
}

export default NavBar;
