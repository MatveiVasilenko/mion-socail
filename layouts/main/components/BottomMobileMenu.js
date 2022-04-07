import React from 'react'
import svgSprite from '../../../project/svg/svgSprite'
import { useRouter } from 'next/router';

const BottomMobileMenu = ({
    classes,
    lang,
    platform = 'Windows'
}) => {
    const menuData = [
        {
            title: 'Главная',
            svg: 'Home',
            link: `/${lang}`,
            value: '/[lang]'
        },
        {
            title: 'Категории',
            svg: 'Category',
            link: `/${lang}/categories`,
            value: '/[lang]/categories'
        },
        {
            title: 'Избранное',
            svg: 'Love',
            link: `/${lang}/loves`,
            value: '/[lang]/loves'
        },
        {
            title: 'Сообщество',
            svg: 'Peoples',
            link: `/${lang}/community`,
            value: '/[lang]/community'
        },
        {
            title: 'Профиль',
            svg: 'Profile',
            link: `/${lang}/profile`,
            value: '/[lang]/profile'
        },
    ]
    const router = useRouter()
    return (
        <div className={platform === 'iOS' ? [classes.bottomMenu, classes.bottomMenu_ios].join(' ') : classes.bottomMenu}>
            {
                menuData.map((item, idx) => (
                    <div 
                        className={(router.pathname === item.value) || (item.value !== '/[lang]' && router.pathname.indexOf(item.value) !== -1) ? [classes.bottomMenu__item, classes.bottomMenu__item_active].join(' ') : classes.bottomMenu__item} 
                        key={`item${idx}`}
                        onClick={() => {
                            router.push(item.link)
                        }}
                        >
                        <div className={classes.bottomMenu__item__svg}>
                            {svgSprite(item.svg)}
                        </div>
                        <div className={classes.bottomMenu__item__text}>{item.title}</div>
                    </div>
                ))
            }
        </div>
    )
}
export default BottomMobileMenu