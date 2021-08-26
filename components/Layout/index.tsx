import React, { ReactNode } from 'react'
import { Footer, Header } from '..'
import styles from './Layout.module.css'
interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {

    const { children } = props

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
