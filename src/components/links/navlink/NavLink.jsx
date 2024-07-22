'use client'

import React from 'react'
import styles from './navlink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({url, title}) => {
    const pathname= usePathname();
    
  return (
    <Link className={`${styles.container} ${pathname == url && styles.activeLink}`} href={url} >
        {title}
    </Link>
  )
}

export default NavLink