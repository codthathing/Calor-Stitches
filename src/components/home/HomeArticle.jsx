import { useState, useEffect, useCallback } from "react";

const HomeArticle = () => {

  const [currentArticle, setCurrentArticle] = useState({
    details: { text: "Love it! It's knitted from extra fine mulesing free Merino wool and really has kept its shape over time. Can't wait to buy some more colours and new awesome styles!", author: "LOLA DARK" },
    array: [
      { id: 1, text: "Love it! It's knitted from extra fine mulesing free Merino wool and really has kept its shape over time. Can't wait to buy some more colours and new awesome styles!", author: "LOLA DARK" },
      { id: 2, text: "You can never take too much care over the choice of your shoes. Too many women think they are unimportant, but the real proof of an elegant woman is what is on are feet.", author: "CHRISTIAN DIOR" },
    ]
  });

  const articleAnimation = useCallback(() => {
    let changeDetails = 1;

    const timeoutId = setInterval(() => {
      changeDetails = changeDetails < currentArticle.array.length ? changeDetails + 1 : 1;
      
      setCurrentArticle(prevState => ({
        ...prevState,
        details: {
          text: prevState.array.find(({ id }) => id === changeDetails).text,
          author: prevState.array.find(({ id }) => id === changeDetails).author,
        }
      }));
    }, 5000);
  
    return () => clearInterval(timeoutId);
  }, []);
  
  useEffect(() => {
    const cleanup = articleAnimation();

    return cleanup;
  }, []);

  return (
    <article id="pageArticle">
      <p id="articleText">{currentArticle.details.text}</p>
      <cite id="articleAuthor">- {currentArticle.details.author}</cite>
    </article>
  );
}

export default HomeArticle;