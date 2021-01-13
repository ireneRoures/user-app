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
import { parseError } from '../services/ErrorService'


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
            .then(resp  => setUsers(resp.data))
            .catch(resp => { setErrorMsg(parseError(resp.response.status)) })
            .finally(() => setIsLoading(false))
    }, [])

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
            <Row className="justify-content-sm-center">
                <Col md={10}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{t('TR_USER_LIST')}</Card.Title>
                            {errorMsg.length > 0 &&
                                <Alert variant='danger'>{t(errorMsg)}</Alert>
                            }
                            <Card.Text>
                            {isLoading ?
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
                            }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}