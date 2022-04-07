import React, {
    useContext
} from 'react'
import {useRouter} from 'next/router'
import classes from './../../styles/views/main/profile-view.module.scss'
import cookie from 'react-cookies';
import ContextApp from '../../context/App/ContextApp'
import svgSprite from './../../project/svg/svgSprite';
import { deleteToken } from '../../context/App/actions';
import ProfileLink from './components/profile/ProfileLinks';

const ProfileView = () => {
    const lang = 'ru'
    const {stateApp, dispatchApp} = useContext(ContextApp)
    const {user} = stateApp
    const filterProfileData = [
        {
            title: 'Все'
        },
        {
            title: 'Платформы'
        }
    ]
    const router = useRouter()
    const enterFunc = () => {
        router.push(`/${lang}/profile/login`)
    }
    const regFunc = () => {
        router.push(`/${lang}/profile/register`)
    }
    const handlerOut = () => {
        dispatchApp(deleteToken())
        localStorage.removeItem('userToken')
        cookie.remove('userToken', {path: `/${lang}`})
    }
    return (
        <div className={classes.profile}>
            <div className={classes.profile__title}>Профиль</div>
            {/* <div className={classes.profile__filter}>
                {filterProfileData.map((filt, idx) => (
                    <div 
                        key={`filt${idx}`}
                        className={classes.profile__filter__item}
                    >{filt.title}</div>
                ))}
            </div> */}
            <div className={classes.profile__auth}>
                <div className={classes.profile__auth__icon}>
                    {svgSprite('ProfileIcon')}
                </div>
                {user ? <div>
                    <div>{user?.name} {user?.surname}</div>
                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                </div> : <div>
                    <div className={classes.profile__btnSmall} onClick={enterFunc}>Войти</div>
                    <div className={classes.profile__btnSmall} onClick={regFunc}>Регистрация</div>
                </div>}
            </div>
            <ProfileLink 
                classes={classes}
            />
            {user && <div>
                <div className={classes.profile__out} onClick={handlerOut}>
                    <div className={classes.profile__out__door}>
                        {svgSprite('Out')}
                    </div>
                    <div>Выйти</div>
                </div>
            </div>}
        </div>
    )
}
export default ProfileView