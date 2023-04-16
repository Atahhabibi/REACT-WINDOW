import { FaCreditCard, FaBook,VscTerminalLinux,IoMdContacts,BsPlugin ,MdLiveHelp,FaRegMoneyBillAlt,BsPersonVcard,FaSuitcase} from 'react-icons/all';


import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <VscTerminalLinux />, url: '/products' },
      { label: 'connect', icon: <IoMdContacts />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <BsPlugin />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <MdLiveHelp />, url: '/products' },
      { label: 'billing', icon: <FaRegMoneyBillAlt />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <BsPersonVcard/>, url: '/products' },
      { label: 'customers', icon: <FaSuitcase />, url: '/products' },
    ],
  },
];

export default sublinks;
