/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '@mkitio/gatsby-theme-password-protect/src/utils/utils';
import { Form, Button } from 'react-bootstrap';

const styles = {

};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className='text-center'>
      <h1 className='password_text pt-5 mt-5'>Edon Alumni Portal</h1>
      <div className='row justify-content-center mt-3'>
        <div className='col-sm-8 col-md-4'>
          <Form className='ml-auto mr-auto' onSubmit={onSubmit}>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              variant="primary"
              className="formbutton mt-2"
            >
              Enter
                </Button>

            <p className='text-white mt-2'>Password will be remembered - only enter on a personal computer.</p>
          </Form>
        </div>


      </div>
    </div >
  );
};

export default PasswordProtect;