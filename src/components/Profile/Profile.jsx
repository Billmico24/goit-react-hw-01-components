import PropTypes from 'prop-types';
import { Container, Descr, UserAvatar, UserName, TagLocation } from './Profile.styled';
import { UserStats } from "../UserStats/UserStats";



export const Profile = ({ username, tag, avatar, location, stats }) => {
  return (
    <Container >
       <Descr >
          <UserAvatar
            src={avatar}
            alt="User avatar"
          />
          <UserName >{username}</UserName>
          <TagLocation >@{tag}</TagLocation>
          <TagLocation >{location}</TagLocation>
       </Descr>

          <UserStats profile={stats}/>
    </Container>
  );
};



Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }),
}