import { Profile } from "./profile";

type CurrentSupportedLanguages = "en" | "fr";

export interface AppStateInterface {
  isDarkMode?: boolean;
  allFriends?: Profile[];
  lang?: CurrentSupportedLanguages | string;
}
