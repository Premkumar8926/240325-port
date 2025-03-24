import React, { memo } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

const ContactCard = styled(motion.div)`
  width: 380px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  padding: 2rem;
  box-shadow: rgba(96, 75, 74, 0.3) 0px 70px 30px -50px;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colorSecondary};
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid ${({ theme }) => theme.muted};
    border-radius: 20px;
    background: transparent;
    color: ${({ theme }) => theme.colorSecondary};
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.glowColor};
      box-shadow: 0 0 10px ${({ theme }) => theme.glowColor}40;
    }
  }

  .error {
    color: #f55d56;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colorSecondary};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.glowColor};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.glowColor}40;
  }
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Form data:', data);
      // Add your form submission logic here
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <ContactContainer>
      <ContactCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your Name"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <span className="error" role="alert">{errors.name.message}</span>}
          </FormField>

          <FormField>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              placeholder="Your Email"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <span className="error" role="alert">{errors.email.message}</span>}
          </FormField>

          <FormField>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              placeholder="Your Message"
              rows={5}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && <span className="error" role="alert">{errors.message.message}</span>}
          </FormField>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
      </ContactCard>
    </ContactContainer>
  );
};

export default memo(Contact);
