import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppContainer } from '../src/components/AppContainer';
import { AppInput } from '../src/components/AppInput';
import { AppButton } from '../src/components/AppButton';

const Login = props => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>página de login</title>
      </Head>
      <main>
        <nav>
          <p>Chat de Infoweb</p>
          <button onClick={() => router.back()}>voltar</button>
        </nav>
        <AppContainer>
          <AppInput label="Usuário" title="apelido ou email do usuário"/>
          <AppInput label="Senha" type="password" />
          <AppButton title="Clique aqui para entrar no chat" label="Entrar no chat" />
        </AppContainer>
      </main>
      </div>
  );
};

export default Login;