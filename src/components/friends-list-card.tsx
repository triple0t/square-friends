import { Profile } from '@common/types/profile';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

interface FriendsListCardProps {
  profileInfo: Profile;
}

const FriendsListCard: FunctionComponent<FriendsListCardProps> = ({ profileInfo }: FriendsListCardProps) => {
  const { t } = useTranslation();
  const isFollowingCheck = profileInfo?.isFollowing;

  return (
    <div className="bg-white shadow overflow-hidden rounded-lg h-auto sm:h-80 md:h-64 my-4 dark:bg-gray-850">
      <img src={profileInfo?.header_image} alt={`Header_image for ${profileInfo?.name}`} className="object-cover h-24 w-full" />
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-row">
          <img
            src={profileInfo?.profile_image}
            alt={`for ${profileInfo?.name}`}
            className="object-cover h-24 w-24 rounded-full  -mt-10 z-10  border-8 border-white flex-none"
          />
          <div className="flex-1 pl-3">
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg leading-6 font-medium dark:text-white">{profileInfo?.name}</h2>
                <span
                  className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    isFollowingCheck ? 'bg-blue-450 text-white' : 'text-blue-450 border border-blue-450 dark:text-white dark:border-white'
                  }`}
                >
                  {isFollowingCheck ? t('following') : t('follow')}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-440">{profileInfo?.username}</p>
            </div>
            <p className="text-gray-900 dark:text-gray-420"> {profileInfo?.bio} </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsListCard;
