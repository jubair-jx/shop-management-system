import { logOut } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.routes";
import { FaRegUserCircle } from "react-icons/fa";

import { sideBarItemsGenerators } from "@/utils/sideBarItemsGenerators";
import { Button, Layout, Menu } from "antd";

const { Sider } = Layout;

interface TUser {
  email: string;
  password: string;
  iat: number;
  exp: number;
}

const SidebarLayout = () => {
  const distpatch = useAppDispatch();
  const user: TUser | null = useAppSelector(
    (state) => state.auth.user as TUser
  );

  const handleLogout = () => {
    distpatch(logOut());
  };

  const sideItems = sideBarItemsGenerators(adminPaths);

  return (
    <Sider
      style={{
        background: "#030637",
      }}
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      onBreakpoint={() => {}}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />

      <div className=" p-2 text-center font-semibold text-lg text-white">
        <h1>Gift Shop Management System</h1>
      </div>

      <div className=" mb-4">
        <div className=" mt-6">
          <FaRegUserCircle
            className=" text-white text-center mx-auto"
            fontSize={30}
          />
        </div>
        <h2 className=" text-center mt-2 text-white font-medium text-sm">
          {user?.email}
        </h2>
      </div>
      <Button
        onClick={handleLogout}
        className="px-3 py-3 text-center flex justify-center items-center mx-auto bg-violet-700 text-gray-200 font-semibold "
      >
        Logout
      </Button>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideItems}
        style={{ background: "#030637" }}
      />
    </Sider>
  );
};

export default SidebarLayout;
