import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import DesktopListItem from './DesktopListItem';
import { Link, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'
import AllProduct from './AllProducts'
import UsedLaptop from './UsedLaptop'
import Monitors from './Monitors'
import NewLaptop from "./NewLaptop";
import Gaming from './Gaming'
import Printer from './Printer'
import Desktop from './Desktop'
import AllInOne from './AllInOne'
import Software from './Software'
import MonitorList from "./listItems/MonitorList";
import NewLaptopList from "./listItems/NewLaptopList";
import UsedLaptopList from "./listItems/UsedLaptopList";
import GamingList from "./listItems/GamingList";
import AppleList from "./listItems/AppleList";
import AllInOneList from "./listItems/AllInOneList";
import DesktopList from "./listItems/DesktopList";
import PrinterList from './listItems/PrinterList'

function Home() {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const { pathname } = location;
  const splitlocation = pathname.split('home/')
  return (
    <div className="Home">
      <div className="all_links">
        <Link to="/home/laptop" className={splitlocation[1] === "laptop" ? "active1" : "link1"}>New Laptop</Link>
        <Link to="/home/usedlaptop" className={splitlocation[1] === "usedlaptop" ? "active1" : "link1"}>Used Laptop</Link>
        <Link to="/home/monitors" className={splitlocation[1] === "monitors" ? "active1" : "link1"}>Monitors</Link>
        <Link to="/home/gaming" className={splitlocation[1] === "gaming" ? "active1" : "link1"}>Gaming PCs</Link>
        <Link to="/home/allinone" className={splitlocation[1] === "allinone" ? "active1" : "link1"}>All In One</Link>
        <Link to="/home/accessories" className={splitlocation[1] === "accessories" ? "active1" : "link1"}>Used Apple</Link>
        <Link to="/home/software" className={splitlocation[1] === "software" ? "active1" : "link1"}>New Apple</Link>
        <Link to="/home/printer" className={splitlocation[1] === "printer" ? "active1" : "link1"}>Printers</Link>
      </div>
      <Switch>
        <Route path="/home/laptop">
          <NewLaptop />
          <NewLaptopList />
        </Route>
        <Route path='/home/desktop'>
          <DesktopListItem />
        </Route>
        <Route path="/home/usedlaptop">
          <UsedLaptop />
          <UsedLaptopList />
        </Route>
        <Route path="/home/monitors">
        <Monitors/>
        </Route>
        <Route path="/home/gaming">
          <Gaming />
          <GamingList />
        </Route>
        <Route path="/home/accessories">
          <Desktop />
          <DesktopList />
        </Route>
        <Route path="/home/allinone">
          <AllInOne />
          <AllInOneList />
        </Route>
        <Route path="/home/software" >
          <Software />
          <AppleList />
        </Route>
        <Route path="/home/printer" >
          <Printer />
          <PrinterList />
        </Route>
      </Switch>
      <ExpenseList />
      <div class="elfsight-app-4be1ac16-cf24-4c72-9316-073abbbd7129"></div>
    </div>
  );
}

export default Home;
