import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { addForEvent, getEventParticipants } from 'api/api';
import { useForm } from 'react-hook-form';
import { addToEventSchema } from 'schemas/schemas';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

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
      source: 'social media', // Default value should match one of the options
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
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          Fill out the form below to register for the upcoming tech conference.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                {...register('fullName')}
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              {...register('dateOfBirth')}
            />
            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
          </div>
          <div>
            <label>How did you hear about this event?</label>
            <div role="group" aria-labelledby="radio-group">
              <div>
                <input
                  id="social-media"
                  name="source"
                  type="radio"
                  value="social media"
                  {...register('source')}
                />
                <label htmlFor="social-media">Social Media</label>
              </div>
              <div>
                <input
                  id="friends"
                  name="source"
                  type="radio"
                  value="friends"
                  {...register('source')}
                />
                <label htmlFor="friends">Friends</label>
              </div>
              <div>
                <input
                  id="found-myself"
                  name="source"
                  type="radio"
                  value="found myself"
                  {...register('source')}
                />
                <label htmlFor="found-myself">Found myself</label>
              </div>
            </div>
            {errors.source && <p>{errors.source.message}</p>}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? <Loader /> : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
