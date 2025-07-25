import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import '../style/Sidebar.css'
import { sidebarArray } from "../data/SidebarArray";

const Sidebar = () => {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isActivePath = (path: string) => location.pathname === path;

  const renderItem = (item: any, level = 0) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isOpen = openItems.includes(item.id);
    const paddingLeft = 20 + level * 16;

    const labelContent = (
      <>
        <span className="icon">{item.icon}</span>
        <span className="title">{item.title}</span>
        {hasSubItems && (
          <span className="arrow">
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </span>
        )}
      </>
    );

    const containerClass = `sidebar-item ${isActivePath(item.path) ? "active" : ""}`;

    return (
      <div key={item.id}>
        {hasSubItems ? (
          <div
            className={containerClass}
            style={{ paddingLeft }}
            onClick={() => toggleItem(item.id)}
          >
            {labelContent}
          </div>
        ) : (
          <NavLink
            to={item.path}
            className={containerClass}
            style={{ paddingLeft }}
          >
            {labelContent}
          </NavLink>
        )}
        {hasSubItems && isOpen && (
          <div className="sub-items">
            {item.subItems.map((sub: any) => renderItem(sub, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return <div className="sidebar">{sidebarArray.map((item) => renderItem(item))}</div>;
};

export default Sidebar;

