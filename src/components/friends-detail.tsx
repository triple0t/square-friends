import { FunctionComponent, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import StarIcon from '@library/common/icons/StarIcon';
import HeartIcon from '@library/common/icons/HeartIcon';
import { Profile } from '@library/common/types';
import AppContext from '../AppContext';

interface Props {
  friendsDetails: Profile;
}

enum ActionType {
  star = 'star',
  favorite = 'favorite',
  follow = 'follow',
}

const FriendsDetail: FunctionComponent<Props> = ({ friendsDetails }: Props) => {
  const { t } = useTranslation();
  const { state, updateState } = useContext(AppContext);

  const updateAppState = (type: ActionType, data: Profile) => {
    const currentIndex = state.allFriends?.findIndex((e) => e.id === data.id);

    if (currentIndex !== undefined && currentIndex >= 0 && state.allFriends) {
      const currentFriend = state.allFriends[currentIndex];
      switch (type) {
        case ActionType.star:
          currentFriend.isStarred = !currentFriend.isStarred;
          break;
        case ActionType.favorite:
          currentFriend.isFavorite = !currentFriend.isFavorite;
          break;
        case ActionType.follow:
          currentFriend.isFollowing = !currentFriend.isFollowing;
          break;
        default:
          break;
      }

      state.allFriends[currentIndex] = currentFriend;
      updateState({ ...state });
    }
  };

  return (
    <div>
      <img src={friendsDetails.header_image} className="object-cover w-full h-80 ring-2" alt={`for ${friendsDetails.name}`} />
      <img
        src={friendsDetails.profile_image}
        className="object-cover h-32 w-32 rounded-full mx-auto  -mt-10 z-10  border-8 border-white flex-none"
        alt={`for ${friendsDetails.name}`}
      />
      <div className="flex px-16 items-center justify-between dark:text-white">
        <h2 className="font-bold">{friendsDetails.name}</h2>
        <p className="">{friendsDetails.username}</p>
      </div>
      <div className="flex my-4 px-16 items-center justify-between">
        <button
          type="button"
          onClick={() => updateAppState(ActionType.star, friendsDetails)}
          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="sr-only"> Star Friend </span>
          <StarIcon state={friendsDetails.isStarred || false} />
        </button>

        <button
          type="button"
          onClick={() => updateAppState(ActionType.favorite, friendsDetails)}
          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="sr-only">Favorite Friend</span>
          <HeartIcon state={friendsDetails.isFavorite || false} />
        </button>

        <button
          type="button"
          onClick={() => updateAppState(ActionType.follow, friendsDetails)}
          className={`shadow-sm text-sm font-medium rounded-md ${
            friendsDetails.isFollowing
              ? 'text-white bg-blue-450 hover:bg-blue-700'
              : 'text-blue-450  border border-blue-450 dark:text-white dark:border-white  hover:bg-blue-700 hover:text-white'
          }  p-2 focus:outline-none focus:ring-2 focus:ring-white`}
        >
          <p>{friendsDetails.isFollowing ? t('following') : t('follow')}</p>
        </button>
      </div>
      <div className="px-16 mt-10 dark:text-white">
        <p> {friendsDetails.bio} </p>
      </div>
    </div>
  );
};

export default FriendsDetail;
