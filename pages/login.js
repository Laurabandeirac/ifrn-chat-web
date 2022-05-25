import React from 'react';
import { AppInput } from '../src/components/AppInput';
import { AppButton } from '../src/components/AppButton';
import { AppContainer } from '../src/components/AppContainer';

const Login = props => {
  return (
		<AppContainer>
			<AppInput
				title="apelido ou email do usuário"
				label="Usuário:"
				type="text"
			/>
			<AppInput 
				label="Senha:" 
				type="password" 
				title="senha do usuário" 
			/>
			<AppButton title="Entrar" />
		</AppContainer>
	);
};

export default Login;