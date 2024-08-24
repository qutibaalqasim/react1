import Clients from "./Clients.jsx";
import Employees from "./Employees.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
export default function App(){
  return <div>
    <Navbar />
    <Employees />
    <Clients />
    <Footer />
  </div>
}