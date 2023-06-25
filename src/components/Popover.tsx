/* eslint-disable*/
import { Dispatch, useState } from "react";
import { QuotesTypes } from "../api/requests";
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  getRandomQuote: () => void;
  randomQuote: QuotesTypes | null;
  setRandomQuote: Dispatch<QuotesTypes | null>;
  showPopover: boolean;
  setShowPopover: Dispatch<boolean>;
};

const Popover = ({
  getRandomQuote,
  randomQuote,
  showPopover,
  setShowPopover,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <button
        onClick={getRandomQuote}
        data-popover-target="popover-click"
        data-popover-trigger="click"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-24 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Mostrar frase
      </button>

      {showPopover && randomQuote && (
        <div className="w-full flex flex-col items-center justify-center mt-4 gap-4">
          <div className="w-0,95 p-4 rounded-xl bg-indigo-300 drop-shadow-xl leading-9">
            <div className="w-full flex justify-end">
              <p
                className="text-xl cursor-pointer"
                onClick={() => setShowPopover(false)}
              >
                <AiOutlineClose />
              </p>
            </div>
            <p className="text-lg">{t(randomQuote.text)}</p>
            <p className="font-bold">
              - {randomQuote.author || "Autor desconhecido"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
