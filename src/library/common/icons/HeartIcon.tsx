import { FunctionComponent } from "react";
const colors = require("tailwindcss/colors");

interface Props {
  state: boolean;
}

const HeartIcon: FunctionComponent<Props> = ({ state }) => {
  return !state ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke={colors.red["600"]}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      viewBox="0 0 20 20"
      fill={colors.red["600"]}
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default HeartIcon;
