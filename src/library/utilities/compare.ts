import { Profile } from "@library/common/types";

const setInfo = (oldElement: Profile, newElement: Profile) => {
  if (oldElement.isFavorite) {
    newElement.isFavorite = oldElement.isFavorite;
  }
  if (oldElement.isStarred) {
    newElement.isStarred = oldElement.isStarred;
  }
  if (oldElement.isFollowing) {
    newElement.isFollowing = oldElement.isFollowing;
  }
  return newElement;
};

/**
 * Compare Two Arrays
 * Copy the select properties from oldArray to newArray
 * return newArray
 */
const compareArray = (oldArray: Array<Profile>, newArray: Array<Profile>) => {
  const returnedArray: Profile[] = [];

  // a faster way of doign this
  if (
    oldArray.length === newArray.length &&
    oldArray[0].id === newArray[0].id
  ) {
    for (let index = 0; index < oldArray.length; index++) {
      const oldElement = oldArray[index];
      const newElement = newArray[index];

      returnedArray[index] = setInfo(oldElement, newElement);
    }
    return returnedArray;
  } else {
    oldArray.forEach((e) => {
      const newid = newArray.findIndex((ne) => ne.id === e.id);
      if (newid !== undefined && newid >= 0) {
        const oldElement = e;
        const newElement = newArray[newid];

        returnedArray[newid] = setInfo(oldElement, newElement);
      }
    });
    return returnedArray;
  }
};

export default compareArray;
