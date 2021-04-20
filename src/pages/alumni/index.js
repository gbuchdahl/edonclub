import React, { } from 'react';
import Layout from "../../components/layout"

const AlumniPage = () => {
    return (
        <Layout>
            <meta name="robots" content="noindex" />
            <h1 className='Hero__header text-center mt-4 mb-5'>Alumni Database</h1>
            <div style={{ marginTop: 30, height: '75vh' }}>
                <iframe title="alumni-spreadsheet" className='w-100 h-100' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWCnMaN_mn0pfoygvHgdc7yypHKHmfhx8g7psS-fZmBrVjGIefSjuTFshbzfKEgM4f4MwiIYZWApzk/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
        </Layout>
    )
}

export default AlumniPage;