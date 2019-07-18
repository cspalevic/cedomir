import React from 'react';
import Link from './Link';
import { links, ILink } from '../data/links';

class Footer extends React.Component {
   render() {
      return (
         <footer>
            {links.map((value: ILink, index: number) => (
               <Link href={value.href} title={value.title} icon={value.icon} />
            ))}
         </footer>
      );
   }
}

export default Footer;