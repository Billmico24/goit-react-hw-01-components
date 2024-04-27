import PropTypes from 'prop-types';
import { FriendsListItem } from "../FriendsListItem/FriendsListItem";
import { ListContainer } from "./FriendList.styled";
export const FriendList = ({friends}) => {
    return (
        <ListContainer >
            {friends.map(el => (
                 <FriendsListItem
                    key={el.id}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline} />
            ))}
                 </ListContainer>)
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};