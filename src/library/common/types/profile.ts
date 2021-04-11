import { FriendsListResponse } from "./FriendsListReponse";

export interface Profile extends FriendsListResponse {
  isFavorite?: boolean;
  isStarred?: boolean;
  isFollowing?: boolean;
}
