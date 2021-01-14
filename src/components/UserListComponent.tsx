import React, { useState } from 'react'
import { User } from '../models/User'
import { getUsers } from '../services/UserService'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { generateUrl, USER_DETAIL_URL } from '../routing/Routes'
import { Container, Row, Col, Card, Alert } from 'react-bootstrap'
import { LoadingComponent } from './LoadingComponent'
import { useTranslation } from 'react-i18next'

const actions = {
    getUsers
}

export const UserListComponent: React.FC = () => {

    const { t } = useTranslation();
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    
    React.useEffect(() => {
        actions.getUsers()
            .then(usersList  => setUsers(usersList))
            .catch(error => setErrorMsg(error))
            .finally(() => setIsLoading(false))
    }, [])

    function renderUsersTable() {
        return (
            isLoading ?
                <LoadingComponent/>
            :
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>{t('TR_ID')}</th> 
                            <th>{t('TR_NAME')}</th>
                            <th>{t('TR_EMAIL')}</th>
                            <th></th>
                        </tr>
                    </thead>
                    {renderUsers()}
                </Table>
        )
    }

    function renderUsers() {
        return users.map((user: User) => { 
            return (
                <tbody key={user.id}>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><Link to={generateUrl(USER_DETAIL_URL, user.id.toString())}><FontAwesomeIcon icon={faEye}/></Link></td>
                    </tr>
                </tbody>
            )
        })
    }
    
    return (
        <Container>
            <Row className='justify-content-sm-center'>
                <Col md={10}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{t('TR_USER_LIST')}</Card.Title>
                            {errorMsg.length > 0 ?
                                <Alert variant='danger'>{t(errorMsg)}</Alert>
                            : 
                                renderUsersTable()
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}