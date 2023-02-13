import React, { useState } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Component/Comman/Sidebar';
import MainIndex from './Screen/MainIndex';
import { Switch, useNavigate, withRouter } from 'react-router-dom';
import AuthIndex from './Screen/AuthIndex';
import menu from '../src/Component/Data/Menu/Menu.json';
import menu2 from '../src/Component/Data/Menu/Menu2.json';
import NavbarUI from './Screen/Ui Component/Navbar';
import Nav from './Component/Comman/Nav';
import { onChangeDarkMode } from './Redux/Actions/Actions';


function App(props) {
  const { darkMode } = props.Mainreducer;
  const [menuData, setMenuData] = useState([...menu.menu]);
  const navigate = useNavigate();
  var baseUrl = process.env.PUBLIC_URL
  const activekey = () => {
    var res = window.location.pathname
    var baseUrl = process.env.PUBLIC_URL
    baseUrl = baseUrl.split("/");
    res = res.split("/");
    res = res.length > 0 ? res[baseUrl.length] : "/";
    res = res ? "/" + res : "/";;
    const activeKey1 = res;
    return activeKey1
  }
  if (activekey() === '/sign-in' || activekey() === '/sign-up' || activekey() === '/forgot-password' || activekey() === '/verification' || activekey() === '/404page') {
    return (
      <div id="cryptoon-layout" className='theme-green'>
        <Sidebar
          activekey={activekey()}
          menuData={menuData}
          GotoChangeMenu={(val) => { GotoChangeMenu(val) }}
          onChangeDarkMode={(val) => { props.onChangeDarkMode(darkMode === 'dark' ? 'light' : 'dark') }}
        />
        <AuthIndex />
      </div>
    );
  }
  const GotoChangeMenu = (val) => {
    if (val === "UI Components") {
      navigate(baseUrl + "/ui-alerts")
      setMenuData([...menu2.menu2]);
      // console.log([...menu2.menu2])
    } else if (val === "changelog") {
      navigate(baseUrl + "/ui-alerts")
      setMenuData([...menu2.menu2]);
    } else if (val === "documentation") {
      navigate(baseUrl + "/ui-alerts")
      setMenuData([...menu2.menu2]);
    } else {
      // props.history.push("dashboard");
      navigate(baseUrl + '/')
      setMenuData([...menu.menu]);
    }
  }

  // console.log(activekey())
  return (
    <div id='cryptoon-layout' className='theme-green'>
      <Sidebar
        activekey={activekey()}
        menuData={menuData}
        GotoChangeMenu={(val) => { GotoChangeMenu(val) }}
        onChangeDarkMode={(val) => { props.onChangeDarkMode(darkMode === 'dark' ? 'light' : 'dark') }}
      />
      <MainIndex activekey={activekey()}
        GotoChangeMenu={(val) => { GotoChangeMenu(val) }}
      />
    </div>
  );
}
const mapStateToProps = ({ Mainreducer }) => ({
  Mainreducer
})

export default connect(mapStateToProps, {
  onChangeDarkMode,
})(App);
