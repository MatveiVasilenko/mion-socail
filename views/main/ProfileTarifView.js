import React, {
    useContext, useEffect, useState
} from 'react'
import { getData } from '../../common/utils'
import ContextApp from '../../context/App/ContextApp'
import classes from './../../styles/views/main/profile-view.module.scss'
import { NET } from './../../network';
import { useRouter } from 'next/router';
import svgSprite from '../../project/svg/svgSprite';
import allImg from './../../project/images/suball.png'

const ProfileTarifView = ({
    data
}) => {
    const {meta} = data
    const {stateApp} = useContext(ContextApp)
    const {user} = stateApp
    const router = useRouter()

    const payHandler = async () => {
        if (user) {
            const json_string = {
                "public_key":"i22684040376",
                "version":"3",
                "action":"pay",
                "amount": 399,
                "currency":"UAH",
                "description":`Подписка на 1 месяц`,
                "result_url": `${NET.FRONT_URL_MAIN}/ru/profile/all`,
                "server_url": `${NET.SERVER_PAY}`,
                'user_id': user.id,
                "companies_id": 'all'
            }
            fetch(`${NET.BACK_URL}/check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(json_string)
            }).then(async (response) => {
                if (response.status === 200) {
                    const result = await response.json()
                    const data = result.data
                    const signature = result.signature
                    window.open(`https://www.liqpay.ua/api/3/checkout?data=${data}&signature=${signature}`, '_self')
                }
            })
        } else {
            router.push('/ru/profile/login')
        }
    }
    return (
        <div className={classes.profile}>
            <div className={classes.profile__title}>Подписки MiON</div>
            <div className={classes.profile__tarif}>
                <div 
                    className={classes.profile__item}
                    onClick={payHandler}
                >
                    <div>
                        <img src={allImg} />
                    </div>
                    <div className={classes.profile__item__btn}>Подписаться</div>
                    {/* <div className={classes.profile__item__platform}><b>{meta?.countCompany}</b> платформ</div> */}
                    {/* <div className={classes.profile__item__title}>MiON All Inclusive</div>
                    <div>доступ ко всем платформам</div>
                    <div>
                        <div>
                            
                            <div><b>{meta?.countCourses}</b> курсов</div>
                            <div><b>1000</b> часов профессионального контента</div>
                        </div>
                        <div>399 грн/месяц</div>
                    </div> */}
                </div>
                {/* <div className={classes.profile__btn}>Оформить</div> */}
            </div>
        </div>
    )
}
export default ProfileTarifView