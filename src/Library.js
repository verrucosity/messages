// src/Library.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Button = styled.button`
  background-color: #ffb3b3;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.2em;
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  &:hover {
    background-color: #ff9999;
  }
  animation: ${bounce} 2s infinite;
  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 16px;
  }
  white-space: nowrap; /* Prevents text wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* Adds ellipsis when text overflows */
`;

const LongButton = styled(Button)`
  white-space: normal; /* Allows text wrapping */
  width: 80%; /* Ensures the button is wide enough */
  text-align: center; /* Centers the text */
  padding: 15px; /* Adds extra padding for comfort */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffe6e6;
  padding: 20px;
`;

const MessageContainer = styled.div`
  margin-top: 20px;
  font-size: 1.5em;
  color: #333;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
  background-color: #ffcccc;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 15px;
  }
`;

const Library = () => {
  const navigate = useNavigate();
  const messages = {
    sad: [
      "だいじょうぶ 😊✨",
      "きみはさいこう！ 💖",
      "えがおをわすれないで 🌸",
      "しんじて 🌟",
      "がんばって！ 💪",
    ],
    overwhelmed: [
      "ひとやすみしよう 🛋️",
      "すべてうまくいく 🌈",
      "リラックスして 🍵",
      "おちついて 🧘",
      "こつこつと 💧",
    ],
    tired: [
      "ねむって 😴",
      "ゆっくりして 🛌",
      "リフレッシュしよう 🍃",
      "からだをたいせつに 🛀",
      "げんきをだして 💖",
    ],
    happy: [
      "そのちょうし！ 😃",
      "きらきらしてる ✨",
      "すばらしい！ 🌟",
      "そのままで 🌈",
      "エネルギーがみなぎる！ 💪",
    ],
    want: [
      "ゆめをかなえて 🌠",
      "じぶんをしんじて 💖",
      "ぜったいできる！ 🌟",
      "こうふくがまってる 🍀",
      "つよいこころで 💪",
    ],
    lonely: [
      "ともだちがいるよ 😊",
      "きみはひとりじゃない 🌸",
      "いっしょにいるよ 💖",
      "さびしくないよ 🌟",
      "あいされてるよ 💖",
    ],
    frustrated: [
      "おちついて 🍵",
      "しんこきゅうしよう 🌬️",
      "だいじょうぶ 🌈",
      "みんなおなじだよ 💖",
      "のんびりして 🛋️",
    ]
  };

  const [message, setMessage] = useState('');

  const handleClick = (id) => {
    const randomMessage = messages[id][Math.floor(Math.random() * messages[id].length)];
    setMessage(randomMessage);
  };

  const buttons = [
    { label: "かなしいとき", id: "sad" },
    { label: "おもいたくなる", id: "overwhelmed" },
    { label: "つかれたとき", id: "tired" },
    { label: "うれしいとき", id: "happy" },
    { label: "なにかがほしい", id: "want" },
    { label: "さびしいとき", id: "lonely" },
    { label: "いらいらする", id: "frustrated" }
  ];

  return (
    <ButtonContainer>
      {buttons.map(button => (
        <Button key={button.id} onClick={() => handleClick(button.id)}>
          {button.label}
        </Button>
      ))}
      <LongButton onClick={() => navigate('/essay')}>
        もしおおきなおおきなえがおがほしいなら、ぼくをクリックして
      </LongButton>
      {message && (
        <MessageContainer>
          {message}
        </MessageContainer>
      )}
    </ButtonContainer>
  );
};

export default Library;
