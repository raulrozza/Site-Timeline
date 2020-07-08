import React, { useState } from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// Contexts
import { useData } from '../../contexts/Data';

// Custom Components
import SectionTitle from '../SectionTitle';

// EmailJS
import emailjs from 'emailjs-com';

// Icons
import { FaMapMarker, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

// React Scroll
import { Element } from 'react-scroll';

import './styles.css';

const Contact = () => {
    // Form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [content, setContent] = useState('');

    // Form validation
    const [hasName, setHasName] = useState(true);
    const [correctMail, setCorrectMail] = useState(true);
    const [hasContact, setHasContact] = useState(true);
    const [hasContent, setHasContent] = useState(true);
    const [validated, setValidated] = useState(false);

    // Sending mail flags
    const [sendingMail, setSendingMail] = useState(false);
    const [btnVariant, setBtnVariant] = useState('');

    const { images } = useData();

    const handleSubmit = async event => {
        const form = event.currentTarget;
        let valid = true;
        event.preventDefault();

        // Verify if name is empty
        if (!name) {
            setValidated(false);
            setHasName(false);
            valid = false;
        } else setHasName(true);

        // Verify if it's a valid email, matching a regular expression
        if (/.*@.*\..*/.test(email)) setCorrectMail(true);
        else {
            setValidated(false);
            setCorrectMail(false);
            valid = false;
        }

        // Verify if at least one method of contact is filled
        if (!phone && !email) {
            setHasContact(false);
            valid = false;
        } else setHasContact(true);

        // Verify if there's a message to send at all
        if (!content) {
            setValidated(false);
            setHasContent(false);
            valid = false;
        } else setHasContent(true);

        if (form.checkValidity() === false || !valid) {
            setValidated(false);
            return;
        }

        // E-mail template configured at EmailJS.com
        const templateFileds = {
            reply_to: email,
            name,
            content,
            reply: email || phone,
        };

        // Disable the button
        setSendingMail(true);
        const response = await emailjs
            .send(
                'gmail',
                process.env.REACT_APP_EMAILJS_TEMPLATE,
                templateFileds,
                process.env.REACT_APP_EMAILJS_USER_ID,
            )
            .catch(error => {
                if (error.text) console.error(error.text);
                else console.error(error);
                setBtnVariant('failure');
            });
        setSendingMail(false);

        if (!response) return;

        // Reset the form
        setBtnVariant('success');
        setName('');
        setEmail('');
        setPhone('');
        setContent('');

        setValidated(true);
        console.log(response);
    };

    return (
        <Element
            name="contact"
            className="contact-section"
            style={images.contactImage}
        >
            <section>
                <Container>
                    <Row>
                        <SectionTitle variant="white">Contato</SectionTitle>
                    </Row>
                    <Row>
                        <Col md="6">
                            <h4>Nosso Endereço:</h4>
                            <ul>
                                <li title="Endereço da EJEC">
                                    <FaMapMarker />
                                    <p>
                                        Rua da Empresa
                                        <br />
                                        Bairro,
                                        <br />
                                        Cidade, apto
                                    </p>
                                </li>
                                <li title="Telefone para contato">
                                    <FaPhone />
                                    <p>(XX) XXXX-XXXX</p>
                                </li>
                                <li title="Whatsapp para contato">
                                    <FaWhatsapp />
                                    <p>
                                        (XX) XXXX-XXXX{' '}
                                        <cite>- Dono do Número</cite>
                                    </p>
                                </li>
                                <li title="E-mail da EJEC">
                                    <FaEnvelope />
                                    seu_email@email.com
                                </li>
                            </ul>
                        </Col>
                        <Col md="6">
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <h4>Nos escreva:</h4>
                                <Form.Group>
                                    <Form.Control
                                        placeholder="Nome"
                                        size="lg"
                                        value={name}
                                        onChange={event =>
                                            setName(event.target.value)
                                        }
                                        isInvalid={!hasName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, nos diga seu nome.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        placeholder="E-mail"
                                        size="lg"
                                        value={email}
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                        type="email"
                                        isInvalid={!hasContact || !correctMail}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {hasContact
                                            ? 'Por favor, digite um e-mail válido.'
                                            : 'Por favor, informe algum dado para entrarmos em contato (e-mail ou telefone).'}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        placeholder="Telefone"
                                        size="lg"
                                        value={phone}
                                        onChange={event =>
                                            setPhone(event.target.value)
                                        }
                                        isInvalid={!hasContact}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Digite sua dúvida"
                                        size="lg"
                                        value={content}
                                        onChange={event =>
                                            setContent(event.target.value)
                                        }
                                        isInvalid={!hasContent}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Vamos, digite uma mensagem para nós!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button
                                    size="lg"
                                    type="submit"
                                    className={btnVariant}
                                    disabled={sendingMail}
                                >
                                    {btnVariant === 'failure'
                                        ? 'Houve um problema ao enviar'
                                        : btnVariant === 'success'
                                        ? 'Mensagem enviada'
                                        : 'Enviar sua mensagem'}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Element>
    );
};

export default Contact;
