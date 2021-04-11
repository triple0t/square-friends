import { Profile } from "@library/common/types";
import { FunctionComponent, useState } from "react";
import FriendsListCard from "./friends-list-card";
import FriendsDetail from "./friends-detail";
import { useTranslation } from "react-i18next";
import SlidePanel from "./slidepanel";

interface FriendsListProps {
  friendsList: Profile[];
}

const FriendsList: FunctionComponent<FriendsListProps> = ({
  friendsList,
}: FriendsListProps) => {
  const [showFriendsDetail, setFriendDetail] = useState<Profile | null>(null);
  const { t } = useTranslation();

  const toggleDetailPanel = (profileData: Profile) => {
    setFriendDetail(profileData);
  };

  return (
    <div>
      <div className="px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4">
        {friendsList[0].id &&
          friendsList.map((profileData) => (
            <button
              key={profileData?.id}
              className="m-0 p-0 text-left"
              onClick={() => toggleDetailPanel(profileData)}
            >
              <FriendsListCard profileInfo={profileData} />
            </button>
          ))}
      </div>

      {showFriendsDetail && (
        <SlidePanel
          panelTitle={`${showFriendsDetail.name} ${t("profile")}`}
          close={() => setFriendDetail(null)}
        >
          <FriendsDetail friendsDetails={showFriendsDetail} />
        </SlidePanel>
      )}
    </div>
  );
};

export default FriendsList;
