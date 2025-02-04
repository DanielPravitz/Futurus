import styled from 'styled-components'
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>Futurus Quiz - Blade Runner</title>
        <link rel="shortcut icon" href="iconTitle.png" type="image/x-icon"></link>
      </Head>

      <QuizContainer>
        <Widget>

          <Widget.Header>
            <h1>Blade Runner</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste seus conhecimentos sobre Blade Runner e divirta-se!</p>

            <form onSubmit={function (infoEvento) {
              infoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infoEvento) => setName(infoEvento.target.value)}
                placeholder="Informe seu nome"
              />
              <br></br>
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>

            </form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Content>
            <h1> Blade Runner</h1>
            <p>Lore ipsum</p>
          </Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/DanielPravitz/Futurus.git" />
    </QuizBackground>
  );
}
