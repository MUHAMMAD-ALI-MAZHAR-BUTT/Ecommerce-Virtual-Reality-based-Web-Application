import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import HeadNavBar from "../HeadNavbar/HeadNavBar.js"
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "fa-solid fa-house",
  },
  {
    path: "/Users",
    name: "Users",
    icon: "fa-solid fa-users",
  },
  {
    path: "/Products",
    name: "Products",
    icon: "fa-sharp fa-solid fa-shop",
  },
  {
    path: "/Analytics",
    name: "Analytics",
    icon: "fa-solid fa-chart-line",
  },
  {
    path: "/UserHistories",
    name: "History",
    icon: "fa-solid fa-clock-rotate-left",
    // subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
    //   {
    //     path: "/settings/2fa",
    //     name: "2FA",
    //     icon: <FaLock />,
    //   },
    //   {
    //     path: "/settings/billing",
    //     name: "Billing",
    //     icon: <FaMoneyBill />,
    //   },
    // ],
  },
  {
    path: "/UserOrders",
    name: "User Orders",
    icon: "fa-solid fa-shop",
  },
  {
    path: "/UserFeedbacks",
    name: "User Feedbacks",
    icon: "fa-solid fa-comments",
    // exact: true,
    // subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
    //   {
    //     path: "/settings/2fa",
    //     name: "2FA",
    //     icon: <FaLock />,
    //   },
    //   {
    //     path: "/settings/billing",
    //     name: "Billing",
    //     icon: <FaMoneyBill />,
    //   },
    // ],
  },
  {
    path: "/ProfileSetting",
    name: "Profile Setting",
    icon: "fa-sharp fa-solid fa-gears",
  },
  {
    path: "",
    name: "Log Out",
    icon: "fa-solid fa-right-from-bracket",
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "240px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  MetaMart
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
            <i  className="fa-solid fa-bars Menu-Bars "  onClick={toggle}></i>
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  {/* <div className="icon">{route.icon}</div> */}
                  <i className={`SideBar-Icons ${route.icon}`}></i>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>
          <motion.div className="container-fluid ">
     <HeadNavBar/>
          </motion.div>
          {children}
          </main>
      </div>
    </>
  );
};

export default SideBar;
