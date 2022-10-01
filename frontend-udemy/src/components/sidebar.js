import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { useState } from "react";
import Message from './images/message.svg'
import Play from './images/playbtn.svg'
import Bar from './images/bar.svg'
import Tool from './images/tool.svg'
import Question from './images/question.svg'
import { AnimatePresence, motion } from "framer-motion";
import './css/sidebar.css'

const routes = [
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
      <div className="main-container" style={{zIndex:'999999999'}} onMouseOver={toggle}>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            
          </div>
          <section className="routes">
            <NavLink
                to='/'
                key='0'
                className="link pt-4"
                activeClassName="active"
            >
                <div className="icon pe-4" ><img src={Play} /></div>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{fontSize:'15px', fontWeight:'800'}}
                    >
                    Courses
                    </motion.div>
                )}
                </AnimatePresence>
            </NavLink>
            <NavLink
                to='/'
                key='0'
                className="link pt-4"
                activeClassName="active"
            >
                <div className="icon pe-4"><img src={Message} /></div>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{fontSize:'15px', fontWeight:'800'}}
                    >
                    Communication
                    </motion.div>
                )}
                </AnimatePresence>
            </NavLink>
            <NavLink
                to='/'
                key='0'Communication
                className="link pt-4"
                activeClassName="active"
            >
                <div className="icon pe-4"><img src={Bar} /></div>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{fontSize:'15px', fontWeight:'800'}}
                    >
                    Performance
                    </motion.div>
                )}
                </AnimatePresence>
            </NavLink>
            <NavLink
                to='/'
                key='0'
                className="link pt-4"
                activeClassName="active"
            >
                <div className="icon pe-4" ><img src={Tool} /></div>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{fontSize:'15px', fontWeight:'800'}}
                    >
                    Tools
                    </motion.div>
                )}
                </AnimatePresence>
            </NavLink>
            <NavLink
                to='/'
                key='0'Communication
                className="link pt-4"
                activeClassName="active"
            >
                <div className="icon pe-4"><img src={Question} /></div>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    style={{fontSize:'15px', fontWeight:'800'}}
                    >
                    Resources
                    </motion.div>
                )}
                </AnimatePresence>
            </NavLink>
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;