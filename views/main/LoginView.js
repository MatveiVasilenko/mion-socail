import React, {
    useState, useEffect
} from 'react'
import cookie from 'react-cookies';
import classes from './../../styles/views/main/auth/auth-view.module.scss'
import { useRouter } from 'next/router';
import { NET } from '../../network';
import Input from './../../widgets/ui/forms/Input';

const LoginView = () => {
    const lang = 'ru'
    const [data, setData] = useState({
        email: '',
        password: '',
        tokenName: 'userToken'
    })
    const [forgetPassword, setForgetPassword] = useState(true)
    const router = useRouter()
    const [errorsData, setErrorsData] = useState({})
    const authData = {
        title: lang === 'ru' ? 'Авторизация' : 'Авторизація',
        enter: lang === 'ru' ? 'Войти' : 'Увійти',
        register: lang === 'ru' ? 'Регистрация' : 'Реєстрація',
        forget: lang === 'ru' ? 'Забыли пароль' : 'Забули пароль',
        forgetText: lang === 'ru' ? 'Для восстановления пароля обратитесь в поддержку по адресу mion.courses@gmail.com' : 'Для відновлення пароля зверніться за адресою mion.courses@gmail.com',
    }
    const dataSender = async () => {
        fetch(`${NET.BACK_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + this.state.clientToken,
            },
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    cookie.save('userToken', data.token)
                    localStorage.setItem('userToken', data.token, {path: '/'})
                    router.push('/ru/profile')

                })
            } else if (response.status === 401) {
                response.json().then((errors) => {
                    if (errors.error === 'password') {
                        setErrorsData({
                            ...errorsData,
                            password: 'Пароль введен неверно'
                        })
                    } else if (errors.error === 'no-user') {
                        setErrorsData({
                            ...errorsData,
                            email: 'Пользователь не зарегестрирован'
                        })
                    } else {
                        const keys = Object.keys(errors.error)
                        let acc = {}
                        keys.map((el) => {
                            return acc[el] = errors.error[el]
                        })
                        setErrorsData(acc)
                    }
                })
            }
        })
    }

    return (
        <div className={classes.auth}>
            <div className={classes.auth__window}>
                <div className={classes.auth__title}>{authData.title}</div>
                <div>
                    <Input 
                        attribute="email"
                        data={data}
                        setData={setData}
                        placeholder="E-mail"
                        type="text"
                        svgIcon="Email"
                        errors={errorsData}
                        classes={classes}
                    />
                    <Input 
                        attribute="password"
                        data={data}
                        setData={setData}
                        placeholder="Пароль"
                        type="password"
                        svgIcon="Password"
                        errors={errorsData}
                        classes={classes}
                    />
                </div>
                {forgetPassword ? <div onClick={() => setForgetPassword(false)} className={classes.auth__forget}>{authData.forget}</div> :
                <div className={classes.auth__forget__text}>{authData.forgetText}</div>}
                <div
                    className={classes.auth__btn}
                    onClick={dataSender}
                >{authData.enter}</div>
                <div 
                    className={classes.auth__register}
                    onClick={() => router.push(`/${lang}/profile/register`)}
                    >{authData.register}</div>
            </div>
        </div>
    )
}
export default LoginView