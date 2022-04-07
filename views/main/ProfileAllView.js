import React, {
    useContext, useEffect, useState
} from 'react'
import { getData } from '../../common/utils'
import ContextApp from '../../context/App/ContextApp'
import classes from './../../styles/views/main/profile-view.module.scss'
import { NET } from './../../network';
import { useRouter } from 'next/router';
import svgSprite from '../../project/svg/svgSprite';

const ProfileAllView = ({
    data
}) => {
    const {meta} = data
    const {stateApp} = useContext(ContextApp)
    const lang = 'ru'
    const {user} = stateApp
    const router = useRouter()

    const [companiesData, setCompaniesData] = useState(false)
    const [noCompanies, setNoCompanies] = useState(false)
    useEffect(() => {
        if (user) {
            if (user.companies_id) {
                (async () => {
                    const data = await getData(
                        `${NET.BACK_URL}/mion/companies-profile`,
                        'POST',
                        {
                            companies: JSON.parse(user.companies_id)
                        }
                    )
                    setCompaniesData(data.data)
                })()
            } else {
                setNoCompanies(true)
            }
        }
    }, [user])
    // const data = getData()
    return (
        <div className={classes.profile}>
            <div className={classes.profile__title}>Ваши платфомы</div>
            <div className={classes.profile__platform}>
                {companiesData && companiesData.map((elem, idx) => (
                    <div 
                        key={`company${idx}`}
                        onClick={() => {
                            router.push(elem.link)
                        }}
                        className={classes.profile__platform__item}
                        >
                        <div className={classes.profile__platform__item__elem}>
                            <div className={classes.profile__platform__item__elem__logo}>
                                <img src={`${NET.FRONT_IMAGE_URL}/${elem.logo}`} />
                            </div>
                            <div className={classes.profile__platform__item__elem__title}>{elem.name}</div>
                        </div>
                        <div className={classes.profile__platform__item__arrow}>
                            {svgSprite('ArrowRight')}
                        </div>
                    </div>
                ))}
            </div>
            
            {noCompanies && <div className={classes.profile__text}>
                    <p>Вы еще не подписаны ни на одну платформу в MiON, но это можно легко исправить ;)</p>
                    <p>Не платите за каждый курс отдельно - покупайте подписку на платформу со всеми курсами автора!</p>
                    <p>Переходите на главную и выбирайте понравившуюся Вам платформу</p>
            </div>}
            {user && user?.haveInclusive === 'ready' ? <div className={classes.profile__text}>
                <div>Вы пользователь - All Inclusive до {user?.day_end}</div>
                <p>Переходите на любую платформу - Вам доступны все курсы</p>
                <div
                    onClick={() => {
                        router.push(`/${lang}`)
                    }}
                    className={classes.profile__btn}
                >Перейти</div>  
            </div> : <div>
                <div className={classes.profile__text}>
                    <p>Хотите получить доступ ко всем платформам в <b>MiON?</b></p>
                    <div className={classes.profile__text__mb}>Прямо сейчас Вы можете оформить подписку <b>MiON All Inclusive</b></div>
                    <div>Получить доступ к</div>
                    <div><b>{meta?.countCompany}</b> платформам</div>
                    <div><b>{meta?.countCourses}</b> курсам</div>
                    <div>и <b>1000</b> часам профессионального контента</div>
                </div>
                <div
                    onClick={() => {
                        router.push(`/${lang}/profile/tarif`)
                    }}
                    className={classes.profile__btn}
                >Оформить</div>            
            </div>}  
        </div>
    )
}
export default ProfileAllView