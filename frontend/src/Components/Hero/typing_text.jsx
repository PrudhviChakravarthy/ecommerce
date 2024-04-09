import React, { useState, useEffect } from 'react';

const Typingtest = () => {
  const [carouselText, setCarouselText] = useState([
    { text: 'Apple', color: 'red' },
    { text: 'Orange', color: 'orange' },
    { text: 'Lemon', color: 'yellow' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      handleCarousel();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleCarousel = async () => {
    await typeSentence(carouselText[currentIndex].text);
    await waitForMs(1500);
    await deleteSentence();
    await waitForMs(500);
    setCurrentIndex((currentIndex + 1) % carouselText.length);
  };

  const typeSentence = async (sentence) => {
    setDisplayText('');
    const letters = sentence.split('');
    for (let i = 0; i < letters.length; i++) {
      await waitForMs(100);
      setDisplayText((prevText) => prevText + letters[i]);
    }
  };

  const deleteSentence = async () => {
    const sentence = displayText;
    const letters = sentence.split('');
    while (letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      setDisplayText(letters.join(''));
    }
  };

  const updateFontColor = (color) => {
    document.getElementById('feature-text').style.color = color;
  };

  const waitForMs = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    updateFontColor(carouselText[currentIndex].color);
  }, [currentIndex, carouselText]);

  return (
    <div>
      <h1 id="feature-text">{displayText}</h1>
    </div>
  );
};

export default Typingtest;