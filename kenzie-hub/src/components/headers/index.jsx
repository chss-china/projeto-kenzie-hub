import { Link, useNavigate } from "react-router-dom";
import { TitleHeaderLogin } from "./style";
import { DivHeaderRegister } from "./style";
import { DivLinkRegister } from "./style";
import { DivHeaderDashboard } from "./style";
export function HeaderRegister() {
  return (
    <DivHeaderRegister>
      <h1>Kenzie Hub</h1>
      <DivLinkRegister>
        <Link to="/">Voltar</Link>
      </DivLinkRegister>
    </DivHeaderRegister>
  );
}
export function HeaderLogin() {
  return (
    <>
      <TitleHeaderLogin>Kenzie Hub</TitleHeaderLogin>
    </>
  );
}
export function HeaderDashboard({ user, setUser }) {
  const navigate = useNavigate();
  let Token = localStorage.getItem("@TokenUser");
  let UserId = localStorage.getItem("@UserId");
  function ClearLogout() {
    localStorage.clear("@TokenUser");
    localStorage.clear("@UserId");

    setUser({});
    navigate("/");
  }

  return (
    <DivHeaderDashboard>
      <h1>Kenzie Hub</h1>
      <button onClick={ClearLogout}>Sair</button>
    </DivHeaderDashboard>
  );
}
export default HeaderDashboard;