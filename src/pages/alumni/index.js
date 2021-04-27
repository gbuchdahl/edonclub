import { Button } from 'react-bootstrap';
import React, { } from 'react';
import Layout from "../../components/layout"

const AlumniPage = () => {
    return (
        <Layout>
            <meta name="robots" content="noindex" />
            <h1 className='Hero__header text-center mt-4 mb-5'>Alumni Database</h1>
            <div className='row justify-content-center' style={{ marginTop: 30, height: 700 }}>
                <div className='col-11 col-md-10'>
                    <iframe width="100%" height="100%" title="alumni-spreadsheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSWCnMaN_mn0pfoygvHgdc7yypHKHmfhx8g7psS-fZmBrVjGIefSjuTFshbzfKEgM4f4MwiIYZWApzk/pubhtml?widget=true&amp;headers=false"></iframe>

                </div>
            </div>
            <div className='text-center'>
                <p className='text-white mt-3'>If your info is incorrect, update the database below:</p>

                <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSfiSUffEsk6Qlf9tDwS2rWdy0SVrCy7gybBKYek9qIMRjWPOQ/viewform?usp=sf_link'>
                    <Button variant="primary" type="link" className="formbutton" size='lg'>
                        Update
                            </Button>
                </a>

                <p className='text-white mt-5'>If you'd like to be removed from the alumni database, reach out to <a href='mailto:theedonclub@gmail.com'>theedonclub@gmail.com</a> and we'll take care of it.</p>

            </div>
        </Layout >
    )
}

export default AlumniPage;