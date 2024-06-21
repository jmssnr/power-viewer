import Link from "next/link";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.root}>
      <ul>
        <li>
          <Link href="./monitoring">Monitoring</Link>
        </li>
        <li>
          <Link href="./analytics">Analytics</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
