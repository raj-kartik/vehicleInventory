// src/data/SidebarArray.tsx
import { FaHome, FaEnvelope, FaBoxes } from 'react-icons/fa';

export const sidebarArray = [
  {
    id: 1,
    title: "Home",
    icon: <FaHome />,
    path: "/",
  },
  {
    id: 2,
    title: "Inbox",
    icon: <FaEnvelope />,
    path: "/inbox",
  },
  {
    id: 3,
    title: "Inventory",
    icon: <FaBoxes />,
    subItems: [
      {
        id: 31,
        title: "Overview",
        path: "/inventory/overview",
      },
      {
        id: 32,
        title: "Product Search",
        path: "/inventory/search",
      },
      {
        id: 33,
        title: "All Products",
        subItems: [
          {
            id: 331,
            title: "New Product",
            path: "/inventory/all-products/new",
          },
          {
            id: 332,
            title: "Existing Product",
            path: "/inventory/all-products/existing",
          },
        ],
      },
    ],
  },
];
