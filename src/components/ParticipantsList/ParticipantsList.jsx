import React from 'react';
import {
  ParticipantDetail,
  ParticipantEmail,
  ParticipantInfo,
  ParticipantListItem,
  ParticipantName,
} from './ParticipantsList.styled';

const ParticipantsList = ({ participants }) => {
  return (
    <>
      {participants.map(participant => (
        <ParticipantListItem key={participant._id}>
          <ParticipantInfo>
            <ParticipantDetail>
              <ParticipantName>{participant.fullName}</ParticipantName>
              <ParticipantEmail>{participant.email}</ParticipantEmail>
            </ParticipantDetail>
          </ParticipantInfo>
        </ParticipantListItem>
      ))}
    </>
  );
};

export default ParticipantsList;
