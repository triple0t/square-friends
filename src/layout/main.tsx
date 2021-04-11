import FriendListActionComponents from "../components/friends-list-action-component";
import FriendsList from "../components/friends-list";
import { useTranslation } from "react-i18next";
import { useEffect, useContext } from "react";
import { FriendsListResponse } from "@library/common/types";
import AppContext from "../AppContext";
import compareArray from "@library/utilities/compare";

const Main = () => {
  const { t } = useTranslation();
  const { state, updateState } = useContext(AppContext);

  useEffect(() => {
    const url = window.location.hostname === 'triple0t.github.io' ? '/square-friends/friendslist.json' : '/friendslist.json';
    fetch(url)
      .then((res) => res.json())
      .then((friendslist: FriendsListResponse[]) => {
        if (state.allFriends && state.allFriends[0]?.id) {
          state.allFriends = compareArray(state.allFriends, friendslist);
        } else {
          state.allFriends = friendslist;
        }
        updateState({ ...state });
      })
      .catch((err) => console.error("Error fetching friends list. ", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="py-4 px-4 flex items-center justify-between h-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {" "}
            {t("friends_list")}{" "}
          </h1>
          <FriendListActionComponents />
        </div>
        <div className="px-4 py-6 sm:px-0">
          <FriendsList friendsList={state.allFriends || []} />
        </div>
      </div>
    </main>
  );
};

export default Main;
