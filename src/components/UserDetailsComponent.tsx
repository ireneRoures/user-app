import React, { useState } from 'react'
import { User } from '../models/User'
import { getUser } from '../services/UserService'
import { useHistory, useParams } from 'react-router-dom'
import { parseError } from '../services/ErrorService'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { LoadingComponent } from './LoadingComponent'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'

const actions = {
    getUser
}

export interface UserDetailsRouteParams {
    id: string;
}

export const UserDetailsComponent: React.FC = () => {

    const { t } = useTranslation();
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    let history = useHistory();
    let { id } = useParams<UserDetailsRouteParams>();
    
    React.useEffect(() => {
        actions.getUser(id)
            .then(resp  => setUser(resp.data))
            .catch(error => setErrorMsg(parseError(error.response.status)))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <Container>
            <Row className='justify-content-sm-center'>
                <Col md={10}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{t('TR_USER_DETAILS')}</Card.Title>
                            {errorMsg.length > 0 &&
                                <Alert variant='danger'>{t(errorMsg)}</Alert>
                            }
                            {isLoading ?
                                <LoadingComponent/>
                            :
                                <div>
                                    <h6><FontAwesomeIcon icon={faKey} color='#A9A9A9'/> {t('TR_ID')}: {!!user ? user.id : '-'}</h6>
                                    <h6><FontAwesomeIcon icon={faUser} color='#A9A9A9'/> {t('TR_NAME')}: {!!user ? user.name : '-'}</h6>
                                    <h6><FontAwesomeIcon icon={faEnvelope} color='#A9A9A9'/> {t('TR_EMAIL')}: {!!user ? user.email : '-'}</h6>
                                </div>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}