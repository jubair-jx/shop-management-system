import EditGiftForm from "@/components/form/EditGiftForm";
import Dashboard from "@/pages/Admin/Dashboard";
import AddProduct from "@/pages/Gift Management/AddProduct/AddProduct";
import AllProduct from "@/pages/Gift Management/AllProduct/AllProduct";
import SaleHistory from "@/pages/Sales History/SaleHistory";
import SalesManagement from "@/pages/Sales Management/SalesManagement";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Gift Shop Management",
    children: [
      {
        name: "Add New Product",
        path: "add-product",
        element: <AddProduct />,
      },
      {
        name: "All Products",
        path: "all-product",
        element: <AllProduct />,
      },
    ],
  },
  {
    name: "Sales Management",
    path: "sales-management",
    element: <SalesManagement />,
  },

  {
    name: "",
    path: "/:id",
    element: <EditGiftForm />,
  },
  {
    name: "Sales History",
    path: "sales-history",
    element: <SaleHistory />,
  },
];

//This is Programmatically way
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const adminSideBarItems = adminPaths.reduce(
//   (acc: TSiderBarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

//This HardCoded way
// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculy />,
//   },
// ];
