import React from 'react';
import { Html, Head, Body, Container, Heading, Text} from '@react-email/components';

const CustomerEmail = ({name,service}) => {
     return (
    <Html>
      <Head>
        <title>Thank You for Your Catering Booking</title>
      </Head>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Thanks for booking with us</Heading>
          <Text style={styles.text1}>dear {name},</Text>
          <Text style={styles.text}>
          Thank you for choosing our catering services for your {service}. We are delighted to be a part of your special occasion and look forward to making it memorable.
          </Text>
          <Text style={styles.text}>We will reach out to you within 1 hour.</Text>
          <Text style={styles.text}>We are here to ensure everything goes smoothly for your event.</Text>
         
          <Text style={styles.text}>
          Best regards,<br />
          Your Shiva caterers
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
    text1: {
        fontSize: '16px',
        lineHeight: '24px',
        margin: '0 0 20px',
        fontFamily: 'bold',
        fontWeight: 'bold',
      },
  };

export default CustomerEmail;


