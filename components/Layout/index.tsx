import React, { ReactNode } from 'react'
import { Footer, Header } from '..'
import styles from './Layout.module.css'
import Head from 'next/head'
interface LayoutProps {
    children: ReactNode
    pageTitle?: string
}

const Layout = ({children, pageTitle = ""}: LayoutProps) => {

    return (
        <>
            <Head>
                <title>{pageTitle || "My Next"}</title>
                <meta name='description' content='My first Next.js app' />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
