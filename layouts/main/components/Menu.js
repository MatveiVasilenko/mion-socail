import { useRouter } from 'next/router'
import React from 'react' 
import svgSprite from './../../../project/svg/svgSprite';
import MenuMobile from './MobileMenu';
import logo from './../../../project/images/logo.png'

const Menu = ({
    classes,
    lang
}) => {
    const router = useRouter()
    const goToPartner = () => {
        router.push('https://drive.google.com/file/d/1K-XIKEVcypozylDRW0COxTAfWnsgGEzx/view?usp=sharing')
    }
    const menu = [
        {
            title: 'Главная',
            link: '/'
        },
        {
            title: 'Категории',
            link: '/categories'
        },
        {
            title: 'Избранное',
            link: '/loves'
        },
        {
            title: 'Сообщество',
            link: '/community'
        },
        {
            title: 'Профиль',
            link: '/profile'
        }
    ]
    const handlerMenu = (link) => {
        router.push(`/${lang}${link}`)
    }
    return (
        <div>
            <div className={classes.menu}>
                <div style={{
                    padding: '0 24px'
                }} className={classes.container}>
                    <div onClick={goToPartner} className={classes.menuData}>
                        <div className={classes.menuData__button}>Стать партнером</div>
                        <div className={classes.menuData__logo}>
                            {/* {svgSprite('Logo')} */}
                        </div>
                    </div>
                </div>
                <div className={[classes.container, classes.menu__menuSite].join(' ')}>
                    <div>
                        <div className={classes.menu__menuSite__general}>
                            {menu.map((men) => (
                                <div 
                                    className={classes.menu__menuSite__general__item}
                                    onClick={() => handlerMenu(men.link)}
                                    >{men.title}</div>
                            ))}
                            {/* <div className={classes.menu__menuSite__general__item}>Войти</div> */}
                            <div className={classes.menu__menuSite__general__logo}>
                                <img src={logo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.menu_mobile}>
                <MenuMobile 
                    classes={classes}
                    lang={lang}
                />
            </div>
        </div>
    )
}
export default Menu