import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export interface ILink {
   href: string;
   title: string;
   icon: JSX.Element;
}

export const links: ILink[] = [
   {
      href: 'mailto:cedomir.spalevic@gmail.com',
      title: 'Email',
      icon: <FaEnvelope />
   },
   {
      href: 'https://github.com/cedomir-spalevic',
      title: 'GitHub',
      icon: <FaGithub />
   },
   {
      href: 'https://www.linkedin.com/in/cedomir-spalevic',
      title: 'LinkedIn',
      icon: <FaLinkedinIn />
   }
];