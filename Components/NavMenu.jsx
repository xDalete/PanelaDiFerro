import styles from '../styles/components/NavMenu.module.scss';
import { useRouter } from "next/router";
import {
  Nav,  Navbar,
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

        <img width="45px" src="https://paneladiferro.xdalete.repl.co/images/Logo_site.png" alt="Logo" style={{ cursor:"pointer" }} />
                  </Link>
        <Link href={"/"}>
          <span style={{ fontWeight: "bold", padding: "10px", color:"black", cursor:"default" }}>PanelaD<span style={{ color: "green" }}>iF</span>erro</span>
        </Link>
      </NavbarBrand>
      <Nav>
          <NavItem onClick={toggle}>
            <Link href={"/search"} >
      <NavLink className={styles.navItem} style={{float:"right"}} href={"/search"} active={router.pathname === "/search"}>Buscar</NavLink> 
            </Link>
          </NavItem>
      <NavItem onClick={toggle}>
            <Link href={"/register"} >
              <NavLink className={styles.navItem}href={"/register"} active={router.pathname === "/register"}>Cadastrar</NavLink> 
            </Link>
          </NavItem>
        </Nav>
    </Navbar>
  )
}

export default NavMenu