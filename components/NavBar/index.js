import classes from "./style.module.scss"
import NavLink from "../NavLink";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink href={"/"} text="Home page" />
      <NavLink href={"/users"} text="Users page" />
    </div>
  );
};

export default NavBar