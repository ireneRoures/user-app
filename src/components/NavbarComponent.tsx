
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { HOME_URL } from '../routing/Routes'
import { useTranslation } from 'react-i18next'

export const NavbarComponent = () => {

    const { t } = useTranslation();
    
    return (
        <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
        <Navbar.Brand href={process.env.REACT_APP_BRAND_URL} target="_blank"><img src='/logo.png' height='35'/></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link href={HOME_URL}>{t('TR_USERS')}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}