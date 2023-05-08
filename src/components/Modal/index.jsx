import { useState } from "react";
import "./style.css";

const Modal = ({active, setActive, setUser}) => {
	const [auth, setAuth] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [testPwd, setTestPwd] = useState("");

	const testAccess = {
		color: pwd === testPwd ? "forestgreen" : "crimson"
	}

	const switchAuth = (e) => {
		e.preventDefault();
		setAuth(!auth);
		clearForm();
	}
	
	const clearForm = () => {
		setName("");
		setEmail("");
		setPwd("");
		setTestPwd("");
	}

	const sendForm = async (e) => {
		e.preventDefault();
		let body = {
			email: email,
			password: pwd
		}
		if (!auth) {
			body.name = name;
			body.group = "group-12";
		}
		let log = "https://api.react-learning.ru/signin"; // вход
		let reg = "https://api.react-learning.ru/signup"; // регистрация

		// Регистрация !== вход (после добавления пользователя в БД, нужно будет повторно войти в аккаунт)
		let res = await fetch(auth ? log : reg, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
		let data = await res.json()
		if (!data.err) {
			// При регистрации с сервера приходит объект о пользователе {name, email, _id, group}
			/* при входе с сервера приходит два параметра: 
				1) токен (без него мы не сможем работать с сервером дальше)
				2) тоже что и при регистрации
				{data: {...}, token: ""}
			*/
			if (!auth) {
				delete body.name;
				delete body.group
				let resLog = await fetch(log, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(body)
				})
				let dataLog = await resLog.json()
				if (!dataLog.err) {
					localStorage.setItem("rockUser", dataLog.data.name);
					localStorage.setItem("rockToken", dataLog.token);
					localStorage.setItem("rockId", dataLog.data._id);
					clearForm();
					setActive(false);
					setUser(dataLog.data.name);
				}
			} else {
				if (!data.err) {
					console.log(data);
					localStorage.setItem("rockUser", data.data.name);
					localStorage.setItem("rockToken", data.token);
					localStorage.setItem("rockId", data.data._id);
					clearForm();
					setActive(false);
					setUser(data.data.name);
				}
			}

		}
		
	}
	return <div 
		className="modal-wrapper"
		style={{display: active ? "flex" : "none"}}
	>
		<div className="modal">
			<button onClick={() => setActive(false)}>Закрыть окно</button>
			<h3>Авторизация</h3>
			<form onSubmit={sendForm}>
				{!auth && <label>
					Имя пользователя
					<input 
						type="text" 
						value={name} 
						onChange={(e) => setName(e.target.value)}
					/>
				</label>}
				<label>
					Электронный адрес
					<input 
						type="email" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Пароль
					<input 
						type="password" 
						value={pwd} 
						onChange={(e) => setPwd(e.target.value)}
					/>
				</label>
				{!auth && <label>
					Повторить пароль
					<input 
						type="password" 
						value={testPwd} 
						onChange={(e) => setTestPwd(e.target.value)}
						style={testAccess}
						// style={{border: "1px solid", backgroundColor: "blueviolet"}}
					/>
				</label>}
				<div className="modal-ctl">
					<button 
						className="modal-btn"
						// Если кнопка формы регистрации, то проверяем наличие соответствия паролей, но они не должы быть пустыми
						disabled={!auth && (!pwd || pwd !== testPwd)}
					>
						{auth ? "Войти" : "Создать аккаунт" }
					</button>
					<a 
						href=""
						className="modal-link"
						onClick={switchAuth}
					>
						{auth ? "Регистрация" : "Войти"}
					</a>
				</div>
			</form>
		</div>
	</div>
}

export default Modal;