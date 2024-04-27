import PropTypes from 'prop-types';
import { ListItem, ListStatus, ListAvatar, ListName } from "./FriendListItem.styled";
export const FriendsListItem = ({ avatar, name, isOnline }) => {
    const statusColor = isOnline ? "green" : "red";
    return (
        <ListItem >
             <ListStatus style={{backgroundColor:statusColor}} ></ListStatus>
             <ListAvatar src={avatar} alt="User avatar" width="48"/>
             <ListName >{ name}</ListName>
        </ListItem> )
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};