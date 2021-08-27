import React from 'react'
import { Layout } from '../../components'
import { useRouter } from 'next/router'

const UserDetail = () => {
    const router = useRouter()

    const {id} = router.query
    
    return (
            <Layout pageTitle="User Detail">
            <div>
                <h1>User Detail Page {id}</h1>
            </div>
            </Layout>
    )
}

export default UserDetail
