import { AppStateInterface } from "@library/common/types/AppState";
const AppState: AppStateInterface = {
  isDarkMode: false,
  allFriends: [
    {
      id: "",
      name: "",
      username: "",
      bio: "",
      profile_image: "",
      header_image: "",
    },
  ],
  lang: "en",
};

export default AppState;
