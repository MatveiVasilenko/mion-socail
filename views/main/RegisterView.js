import React, {
    useState, useContext, useEffect
} from 'react'
import classes from './../../styles/views/main/auth/auth-view.module.scss'
import { useRouter } from 'next/router';
import cookie from 'react-cookies'
import ContextApp from './../../context/App/ContextApp';
import { NET } from '../../network';
import EditorPhone from './../../widgets/ui/forms/EditorPhone';
import Input from './../../widgets/ui/forms/Input';
import svgSprite from './../../project/svg/svgSprite';

const RegisterView = () => {
    const lang = 'ru'
    const {dispatchApp} = useContext(ContextApp)
    const registerData = {
        title: lang === 'ru' ? 'Регистрация' : 'Реєстрація',
        register: lang === 'ru' ? 'Регистрация' : 'Реєстрація',
        name: lang === 'ru' ? 'Имя' : "Ім'я",
        surname: lang === 'ru' ? 'Фамилия' : 'Фамілія',
        password: lang === 'ru' ? 'Пароль' : 'Пароль',
        repeatPassword: lang === 'ru' ? 'Повторить пароль' : 'Повторіть пароль',
        politic: lang === 'ru' ? `Я согласен(на) с <a className={classes.politicLink} href="https://mion.courses/ru/document/politic">политикой конфиденциальности</a> и потверждаю, что заключаю <a className={classes.politicLink} href="https://mion.courses/ru/document/contract">договор публичной оферты</a>` : `Я згоден(на) з <a class=${classes.politicLink} href="https://mion.courses/ru/document/politic">політикою конфіденційності</a> та стверджую, що укладаю <a class=${classes.politicLink} href="https://mion.courses/ru/document/contract">договір публічної оферти</a>`
    }
    const router = useRouter()

    const [data, setData] = useState({
        name: '',
        surname: '',
        password: '',
        email: '',
        phone: '',
        tokenName: 'userToken',
        politic: true
    })
    const [siteUser, setSiteUser] = useState(false)
    const [errorsData, setErrorsData] = useState({})
    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('userData'))
        console.log(userData)
        if (userData) {
            setSiteUser(true)
        }
    }, [setData])
    useEffect(() => {
        setData({
            ...data,
            refferal_key: router.query.refferal ? router.query.refferal : null
        })
    }, [router])
    const dataSender = async () => {
        let userData = JSON.parse(localStorage.getItem('userData'))

        fetch(`${NET.BACK_URL}/register`, {
            method: 'POST',
            body: siteUser ? JSON.stringify({
                ...data,
                phone: userData.phone,
                name: userData.name,
                refferal_key: userData.refferal_key,
                user_id: userData.id
            }) : JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-Requested-With': 'XMLHttpRequest'
                // 'Authorization': 'Bearer ' + this.state.clientToken,
            },
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    console.log(data.token)
                    // dispatchApp(createToken(data.token))
                    localStorage.setItem('userToken', data.token)
                    cookie.save('userToken', data.token)
                    router.push(`/${lang}/profile`)
                })
            } else if (response.status === 401) {
                response.json().then((errors) => {
                        const keys = Object.keys(errors.error)
                        let acc = {}
                        keys.map((el) => {
                            console.log(errors.error[el])
                            if (errors.error[el][0] === 'The email has already been taken.') {
                                return acc[el] = 'Пользователь уже зарегистрирован.'
                            } else if (errors.error[el][0] === 'The name field is required.' || errors.error[el][0] === 'The surname field is required.' || errors.error[el][0] === 'The email field is required.' || errors.error[el][0] === 'The phone field is required.' || errors.error[el][0] === 'The password field is required.' || errors.error[el][0] === 'The surname field is required.' || errors.error[el][0] === 'The email field is required.' || errors.error[el][0] === 'The phone field is required.' || errors.error[el][0] === 'The repeat password field is required.') {
                                return acc[el] = 'Поле должно быть заполнено'
                            } else {
                                return acc[el] = errors.error[el]
                            }
                            
                        })
                        setErrorsData(acc)
                    // }
                })
            } else if (response.status === 422) {
                response.json().then((error) => {
                    if (error === 'Politic') {
                        setErrorsData({
                            politic: 'Yes'
                        })
                    } else {
                        setErrorsData({
                            password: ['Пароли не совпадают'],
                            repeatPassword: ['Пароли не совпадают'],
                        })
                    }
                })
            }
        })
    }
    return (
        <div className={[classes.auth, classes.auth__register].join(' ')}>
            <div className={classes.auth__window}>
                <div className={classes.auth__title}>{registerData.title}</div>
                {!siteUser && <Input 
                    attribute="name"
                    data={data}
                    setData={setData}
                    placeholder={registerData.name}
                    type="text"
                    svgIcon="Profile"
                    errors={errorsData}
                    classes={classes}
                />}
                <Input 
                    attribute="surname"
                    data={data}
                    setData={setData}
                    placeholder={registerData.surname}
                    type="text"
                    svgIcon="Profile"
                    errors={errorsData}
                    classes={classes}

                />
                <Input 
                    attribute="email"
                    data={data}
                    setData={setData}
                    placeholder="e-mail"
                    type="email"
                    svgIcon="Email"
                    errors={errorsData}
                    classes={classes}

                />
                {!siteUser && <EditorPhone 
                    attribute="phone"
                    dataItem={data}
                    setDataItem={setData}
                    placeholder="Телефон"
                    type="tel"
                    svgIcon="Phone"
                    errors={errorsData}
                    classes={classes}
                />}
                <Input 
                    attribute="password"
                    data={data}
                    setData={setData}
                    placeholder={registerData.password}
                    type="password"
                    svgIcon="Password"
                    errors={errorsData}
                    classes={classes}

                />
                <Input 
                    attribute="repeatPassword"
                    data={data}
                    setData={setData}
                    placeholder={registerData.repeatPassword}
                    type="password"
                    svgIcon="Password"
                    errors={errorsData}
                    classes={classes}

                />
                {errorsData['politic'] === 'Yes' && <div className={classes.politicError}>Необходимо принять условия политики конфиденциальности</div>}
                <div
                    className={classes.auth__btn}
                    onClick={dataSender}
                >{registerData.register}</div>
                 <div 
                    className={classes.politic}
                    onClick={() => setData({
                        ...data,
                        politic: !data.politic
                    })}
                    >
                    <div className={classes.politic__sprite}>
                        {svgSprite(data.politic ? 'AuthCheckTrue' : 'AuthCheckFalse')}
                    </div>
                    <div dangerouslySetInnerHTML={{__html: registerData.politic}} className={classes.politic__text}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterView