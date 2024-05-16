import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { addForEvent, getEventParticipants } from 'api/api';
import { useForm } from 'react-hook-form';
import { addToEventSchema } from 'schemas/schemas';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import {
  ErrorMsg,
  FormContainer,
  FormGroup,
  Input,
  Label,
  RadioGroup,
  Section,
  SubmitButton,
  Title,
} from './Form.styled';

const Form = () => {
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      setLoading(true);
      try {
        const data = await getEventParticipants(id);
        setTitle(data.title);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addToEventSchema),
    defaultValues: {
      fullName: '',
      email: '',
      dateOfBirth: '',
      source: 'social media',
    },
  });

  const onSubmit = async values => {
    setLoading(true);
    try {
      await addForEvent(id, values);
      toast.success('Registration successful!');
      navigate(`/event/${id}`);
      reset();
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Section>
        <Title>{title}</Title>
        <p>
          Fill out the form below to register for the upcoming tech conference.
        </p>
      </Section>
      <Section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              {...register('fullName')}
            />
            {errors.fullName && <ErrorMsg>{errors.fullName.message}</ErrorMsg>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              {...register('email')}
            />
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              {...register('dateOfBirth')}
            />
            {errors.dateOfBirth && (
              <ErrorMsg>{errors.dateOfBirth.message}</ErrorMsg>
            )}
          </FormGroup>
          <FormGroup>
            <Label>How did you hear about this event?</Label>
            <RadioGroup role="group" aria-labelledby="radio-group">
              <div>
                <input
                  id="social-media"
                  name="source"
                  type="radio"
                  value="social media"
                  {...register('source')}
                />
                <Label htmlFor="social-media">Social Media</Label>
              </div>
              <div>
                <input
                  id="friends"
                  name="source"
                  type="radio"
                  value="friends"
                  {...register('source')}
                />
                <Label htmlFor="friends">Friends</Label>
              </div>
              <div>
                <input
                  id="found-myself"
                  name="source"
                  type="radio"
                  value="found myself"
                  {...register('source')}
                />
                <Label htmlFor="found-myself">Found myself</Label>
              </div>
            </RadioGroup>
            {errors.source && <ErrorMsg>{errors.source.message}</ErrorMsg>}
          </FormGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? '' : 'Register'}
          </SubmitButton>
        </form>
      </Section>
    </FormContainer>
  );
};

export default Form;
