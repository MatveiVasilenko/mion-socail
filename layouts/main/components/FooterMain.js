import React from 'react'
import logoImg from './../../../project/images/logo.png'
import { useRouter } from 'next/router';
import svgSprite from '../../../project/svg/svgSprite';

const FooterMain = ({
    classes
}) => {
    const router = useRouter()
    const lang = 'ru'
    const menuNav = [
        {
            title: 'Категории',
            link: 'categories'
        },
        {
            title: 'Избранное',
            link: 'loves'
        },
        {
            title: 'Профиль',
            link: 'profile'
        }
    ]
    const menuNavDoc = [
        {
            title: 'Политика конфиденциальности',
            link: 'document/politic'
        },
        {
            title: 'Публичний договор (оферта)',
            link: 'document/contract'
        }
    ]
    const social = [
        {
            svg: 'Facebook',
            link: 'https://www.facebook.com/mion.social'
        },
        {
            svg: 'Instagram',
            link: 'https://www.instagram.com/mion.social/'
        },
        {
            svg: 'Telegram',
            link: 'https://t.me/+W6Cr3aA28X1iYWMy'
        },
    ]
    const motichLink = () => {
        window.location.href = 'https://motich.mion.courses'
    }
    const socialLink = (link) => {
        window.location.href = link
    }
    const navFunc = (link) => {
        router.push(`/${lang}/${link}`)
    }
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.footer__menu}>
                    <div className={classes.footer__menu__logo}>
                        <img src={logoImg} />
                    </div>
                    <div className={classes.footer__menu__nav}>
                        <div className={classes.footer__menu__nav__title}>Навигация</div>
                        <div>
                            {menuNav.map((el, idx) => (
                                <div 
                                    className={classes.footer__menu__nav__item}
                                    key={`nav${idx}`}
                                    onClick={() => navFunc(el.link)}
                                >{el.title}</div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.footer__menu__nav}>
                        <div className={classes.footer__menu__nav__title}>Документы</div>
                        <div>
                            {menuNavDoc.map((el, idx) => (
                                <div 
                                    className={classes.footer__menu__nav__item}
                                    key={`nav${idx}`}
                                    onClick={() => navFunc(el.link)}
                                >{el.title}</div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.footer__menu__nav}>
                        <div className={classes.footer__menu__nav__title}>Сотрудничество</div>
                        <div>
                            <div className={classes.footer__menu__nav__item}>
                                <a className={classes.footer__menu__nav__item__link} href="tel:+380979151281">38 (097) 91 51 281</a>
                                <span className={classes.footer__menu__nav__item__link}>CEO - Матвей Василенко</span>
                            </div>
                            <div className={classes.footer__menu__nav__item}>
                                <a className={classes.footer__menu__nav__item__link} href="mailto:mion.courses@gmail.com">mion.courses@gmail.com</a>
                            </div>
                            <div className={classes.footer__menu__nav__social}>
                                {social.map((el, idx) => (
                                    <div
                                        onClick={() => socialLink(el.link)}
                                        key={`link${idx}`}
                                    >
                                        {svgSprite(el.svg, {
                                            className: classes.footer__svg
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.footer__right}>(с) 2021 MiON SOCIAL - все права защищены</div>
            </div>
            <div onClick={motichLink} className={classes.footer__link}>Powered by MOTICH IT PRO</div>
        </div>
    )
}
export default FooterMain