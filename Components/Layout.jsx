import NavMenu from "./NavMenu";
import Footer from "./Footer";

const Layout = ({ children }) => {

  return <>
    <header>
      <NavMenu />
    </header>
    <main className={`flex-shrink-0 pb-5`}>
      {children}
    </main>
    <Footer />
  </>
}

export default Layout