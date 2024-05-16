import { getEventParticipants } from 'api/api';
import Input from 'components/Input/Input';
import ParticipantsList from 'components/ParticipantsList/ParticipantsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Event = () => {
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventParticipants(id);
        setParticipants(data.participants);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  const filteredParticipants = participants.filter(
    participant =>
      participant.fullName.toLowerCase().includes(filter.toLowerCase()) ||
      participant.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {participants.length > 0 ? (
        <>
          <Input onChange={e => setFilter(e.target.value)} />
          <ul>
            {filteredParticipants.length > 0 ? (
              <ParticipantsList participants={filteredParticipants} />
            ) : (
              <p>No participants match the filter</p>
            )}
          </ul>
        </>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <p>There are no participants for the meeting yet</p>
          )}
        </>
      )}
    </div>
  );
};

export default Event;
