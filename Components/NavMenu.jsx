import styles from '../styles/components/NavMenu.module.scss';
import { useRouter } from "next/router";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <Navbar dark expand="md" light container fixed="top" className={styles.mainMenu}>
      <NavbarBrand>
                <Link href={"/"}>

        <img width="45px" src="https://paneladiferro.xdalete.repl.co/images/Logo_site.png" alt="Logo" />
                  </Link>
        <Link href={"/"}>
          <span style={{ fontWeight: "bold", padding: "10px", color:"black" }}>PanelaD<span style={{ color: "green" }}>iF</span>erro</span>
        </Link>
      </NavbarBrand>
      {/*<NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={open}>
        <Nav className={"me-auto"} navbar>
          <NavItem onClick={toggle}>
            <Link href={"/"} >
              <NavLink href={"/"} active={router.pathname === "/"}>Inicio</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>*/}
    </Navbar>
  )
}

export default NavMenu