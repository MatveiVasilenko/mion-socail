import React from 'react'
import svgSprite from '../../../project/svg/svgSprite'
import logoVahta from './../../../project/images/sponsor/logoVahta.png'
import { useRouter } from 'next/router';

const SponsorSection = ({
    classes
}) => {
    const router = useRouter()
    const stayParthers = () => {
        router.push('https://t.me/matvasilenko')
    }
    const goToSite = (link) => {
        router.push(link)
    }
    return (
        <div className={classes.container}>
            <div className={classes.sponsor}>
                <div className={classes.sponsor__title}>Наши премиум-партнеры</div>
                <div className={classes.sponsor__items}>
                    <div 
                        className={classes.sponsor__item}
                        onClick={() => goToSite('https://vahta.com.ua')}
                        >
                        <div className={classes.sponsor__item__logo}>
                            <img src={logoVahta} />
                        </div>
                        <div className={classes.sponsor__item__text}>
                            <div className={classes.sponsor__item__text__title}>
                                <div>VAHTA</div>
                                <div className={classes.sponsor__item__text__title__svg}>
                                    {svgSprite('ArrowRight')}
                                </div>
                            </div>
                            <ul className={classes.sponsor__item__text__lisp}>
                                <li>Создание систем контроля посещаемости</li>
                                <li>CRM системы под ключ</li>
                                <li>Создание сайтов под ключ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={classes.sponsor__btnWantMion}
                    onClick={stayParthers}
                    >Хочу стать премиум-партнером</div>
            </div>
        </div>
    )
}
export default SponsorSection