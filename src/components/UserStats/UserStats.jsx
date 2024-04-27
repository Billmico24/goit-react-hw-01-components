import PropTypes from 'prop-types';
import { UserStatsContainer, StatList, Label, Quantity} from "./UserStats.styled";

export const UserStats = ({ profile: { likes, views, followers } }) => {
    return (
        <UserStatsContainer >
            <StatList>
              <Label >Followers</Label>
              <Quantity >{followers}</Quantity>
            </StatList>
            <StatList>
              <Label >Views</Label>
              <Quantity >{views}</Quantity>
            </StatList>
            <StatList>
              <Label >Likes</Label>
              <Quantity >{likes}</Quantity>
            </StatList>
        </UserStatsContainer>
    )
}


UserStats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}