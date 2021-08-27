import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Head from 'next/head'
const Custom404 = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)

    }, [])

    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className='container-404'>
                <h3 >
                    Oops... Page is Not Found!
                </h3>
            </div>
        </>
    )
}

export default Custom404
