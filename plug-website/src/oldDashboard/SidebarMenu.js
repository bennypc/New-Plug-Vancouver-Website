import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import {
  BsHouseDoorFill,
  BsFillCalendarEventFill,
  BsPeopleFill,
} from "react-icons/bs";
import { IoMenu, IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar defaultCollapsed className="h-[100vh]">
      <Menu className="min-h-full">
        <button
          className="sb-button mt-6 ml-[26px] w-6 h-6"
          onClick={() => collapseSidebar()}
        >
          <IoMenu className="w-6 h-6" />
        </button>
        <MenuItem
          routerLink={<Link to="/dashboard/home" />}
          icon={<BsHouseDoorFill />}
          className="pt-2"
        >
          {" "}
          <h1 className="ml-1">Home</h1>
        </MenuItem>
        <MenuItem
          routerLink={<Link to="/dashboard/calendar" />}
          icon={<BsFillCalendarEventFill />}
        >
          {" "}
          <h1 className="ml-1">Calendar</h1>
        </MenuItem>
        <MenuItem
          routerLink={<Link to="/dashboard/teams" />}
          icon={<BsPeopleFill />}
        >
          {" "}
          <h1 className="ml-1">Teams</h1>
        </MenuItem>
        <MenuItem
          routerLink={<Link to="/dashboard/profile" />}
          icon={<FaUser />}
        >
          {" "}
          <h1 className="ml-1">Profile</h1>
        </MenuItem>
        <MenuItem
          routerLink={<Link to="/dashboard/settings" />}
          icon={<IoSettingsSharp />}
        >
          {" "}
          <h1 className="ml-1">Settings</h1>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
