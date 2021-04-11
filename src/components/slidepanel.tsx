import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import CancelIcon from "@common/icons/CancelIcon";

interface Props {
  children?: ReactNode;
  close: () => void;
  panelTitle?: string;
}

const SlidePanel: FunctionComponent<Props> = ({
  children,
  close,
  panelTitle,
}: Props) => {
  const [animationCSS, setAnimationCSS] = useState({
    panel: "translate-x-full",
    container: "opacity-0",
  });

  useEffect(() => {
    const animation = {
      panel: "translate-x-0",
      container: "opacity-1000",
    };
    setTimeout(function () {
      setAnimationCSS(animation);
    });
  }, []);

  return (
    <div
      className={`fixed z-20 inset-0 overflow-hidden transform transition-opacity ${animationCSS.container}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        />
        <section
          className={`absolute inset-y-0 right-0 pl-10 max-w-full flex transform transition-all ${animationCSS.panel}`}
          aria-labelledby="slide-over-heading"
        >
          <div className="relative w-screen max-w-md">
            <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
              <button
                type="button"
                onClick={() => close()}
                className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Close panel</span>
                {CancelIcon}
              </button>
            </div>
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll dark:bg-black">
              <div className="px-4 sm:px-6">
                <h2
                  id="slide-over-heading"
                  className="text-lg font-medium text-gray-900 dark:text-white"
                >
                  {panelTitle}
                </h2>
              </div>
              <div className="mt-6 relative flex-1 px-4 sm:px-6 break-words">
                {children}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SlidePanel;
