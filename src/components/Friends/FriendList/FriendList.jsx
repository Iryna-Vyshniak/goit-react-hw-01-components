import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsList, FriendItem} from './FriendList.styled'

export const FriendList = ({friends}) => {
  return (
    <FriendsList>
      {
        friends.map((friend) => (<FriendItem
            key={friend.id}
            id={friend.id}
           >
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
            </FriendItem>)
          )
      }
</FriendsList>
  )
}


FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}).isRequired).isRequired

}