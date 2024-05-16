import React from 'react';

const ParticipantsList = ({ participants }) => {
  return (
    <>
      {participants.map(participant => (
        <li key={participant._id}>
          <div>
            <div>
              <p>{participant.fullName}</p>
              <p>{participant.email}</p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default ParticipantsList;
