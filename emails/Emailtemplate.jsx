
// src/templates/WelcomeEmail.js
import React from 'react';
import { Html, Head, Body, Container, Heading, Text, Link } from '@react-email/components';

const WelcomeEmail = ({name,email,phone,service,details}) => {
     return (
    <Html>
      <Head>
        <title>You Got a New Booking...</title>
      </Head>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Congratulation, You Got a New Booking</Heading>
          <Text style={styles.text}>Hi there,</Text>
          <Text style={styles.text} className='font-bold text-lg'>
            customer detail:
          </Text>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Email: {email} </Text>
          <Text style={styles.text}>Phone nO: {phone}</Text>
          <Text style={styles.text}>Service They Need: {service}</Text>
          <Text style={styles.text}>Comment By Customer: {details}</Text>
         
          <Text style={styles.text}>
            Cheers,<br />
            Congrats for new booking
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: '#f6f6f6',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    width: '100%',
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '40px auto',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0 0 20px',
  },
  link: {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
  },
};

export default WelcomeEmail;


