'use client'
import React, { useState } from 'react'
import NavLink from './navlink/NavLink'
import styles from './links.module.css'
import Image from 'next/image'
const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Blogs",
        path: "/blogs"
    },
    {
        title: "Contact",
        path: "/contact"
    }

]

const Links = () => {
    const [open, setOpen] = useState(false)

    const session = true;
    const admin = true;

    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {
                    links.map((link, index) => (
                        <NavLink url={link.path} title={link.title} key={index} />
                    ))
                }
                {
                    session ? (
                        <>
                            {admin && (
                                <NavLink url={'/admin'} title={'Admin'} />
                            )}
                            <button className={styles.logout}>Logout</button>
                        </>

                    ) : (
                        <NavLink url={'/login'} title={"Login"} />
                    )
                }
            </div>

            <Image onClick={() => setOpen(!open)} className={styles.menuBtn} src={'/menu.png'} width={32} height={32} alt='menu' />

            {
                open && (
                    <div className={styles.mobileLinks}>
                        {
                            links.map((link, index) => (
                                <NavLink url={link.path} title={link.title} key={index} />
                            ))
                        }
                        {
                            session ? (
                                <>
                                    {admin && (
                                        <NavLink url={'/admin'} title={'Admin'} />
                                    )}
                                    <button className={styles.logout}>Logout</button>
                                </>

                            ) : (
                                <NavLink url={'/login'} title={"Login"} />
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Links