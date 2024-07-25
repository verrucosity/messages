// src/EssayPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EssayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffe6e6;
  height: 100vh;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

const EssayContent = styled.div`
  background-color: #ffcccc;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  color: #333;
  font-size: 1.2em;
`;

const BackButton = styled.button`
  background-color: #ffb3b3;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.2em;
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #ff9999;
  }
`;

const EssayPage = () => {
  const navigate = useNavigate();

  const essay = `
    きみへ、

    いつもおもいやりとあたたかさで、ぼくのこころをあかるくしてくれてありがとう。きみのえがおは、まるでひだまりのようにあたたかく、みんなにしあわせをとどけるふしぎなちからをもっているね。

    どんなときでも、きみのやさしさとつよさにはかんしんするばかりだよ。きみがちいさなこえでささやくやさしいことば、さりげないおもいやりのしぐさ、すべてがぼくにとっておおきなはげましとなっているんだ。

    きみといっしょにすごすじかんは、まいにちがたからもののようにかけがえのないもの。きみのそんざいそのものが、ぼくにとってのしあわせのしんぼるだよ。つらいことがあっても、きみがいるだけで、すべてがよくなるんだ。

    どうか、そのままのきみでいてね。きみのえがおとあいじょうは、このせかいにひつようなものだから。きみがいるだけで、まわりのひとびとも、もっとしあわせになれるよ。

    いつもありがとう。そして、これからもよろしくね。

    あなたのともだちより
  `;

  return (
    <EssayContainer>
      <EssayContent>
        {essay}
      </EssayContent>
      <BackButton onClick={() => navigate('/')}>
        もどる
      </BackButton>
    </EssayContainer>
  );
};

export default EssayPage;
