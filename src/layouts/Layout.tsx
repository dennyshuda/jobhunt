import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { IChildren } from "../types";

export default function Layout({ children }: IChildren) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
