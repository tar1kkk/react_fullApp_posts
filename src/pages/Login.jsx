import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

function Login(props) {
	return (
		<div>
			<h1>Страница для авторизации</h1>
			<form>
				<MyInput type='text' placeholder='Введите логин' />
				<MyInput type='password' placeholder='Введите пароль' />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
}

export default Login;