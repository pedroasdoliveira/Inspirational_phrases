/* eslint-disable no-empty */
import { useQuery } from "@tanstack/react-query";

import { GetQuotes, QuotesTypes } from "../api/requests";
import Popover from "../components/Popover";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [randomQuote, setRandomQuote] = useState<QuotesTypes | null>(null);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [showBackground, setShowBackground] = useState<boolean>(false);

  const { data: quotes } = useQuery({
    queryKey: ["quotes"],
    queryFn: GetQuotes,
  });

  const getRandomQuote = () => {
    if (quotes) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
  
      setRandomQuote(quote);
      setShowPopover(true);
      setShowBackground(true);
    }
  };

  useEffect(() => {
    const handleBackgroundClick = () => {
      setShowBackground(false);
    };

    if (showBackground) {
      document.addEventListener("click", handleBackgroundClick);
    }

    return () => {
      document.removeEventListener("click", handleBackgroundClick);
    };
  }, [showBackground]);

  return (
    <main className="w-screen h-screen text-center bg-sky-200">
      <header className="w-full h-auto p-4 bg-teal-400">
        <div className="w-full flex flex-row  items-center justify-center">
          <h1 className="font-serif text-xl font-bold">Frases de Inspiração</h1>
        </div>
      </header>

      <section className="w-full my-60 block items-center justify-center">
        <Popover
          getRandomQuote={getRandomQuote}
          randomQuote={randomQuote}
          setRandomQuote={setRandomQuote}
          showPopover={showPopover}
          setShowPopover={setShowPopover}
        />
      </section>
    </main>
  );
};

export default MainPage;
