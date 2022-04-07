import React, {
    useContext
} from 'react'
import { useRouter } from 'next/router';
import svgSprite from '../../../../project/svg/svgSprite';
import ContextApp from '../../../../context/App/ContextApp';

const ProfileLink = ({
    classes
}) => {
    const lang = 'ru'
    const router = useRouter()
    const linkData = [
        {
            title: 'Ваши платформы',
            link: `/${lang}/profile/all`,
            svg: 'Category'
        },
        {
            title: 'Подписка MiON',
            link: `/${lang}/profile/tarif`,
            svg: 'Tarif'
        }
    ]
    return (
        <div className={classes.profile__links}>
            {linkData.map((link) => (
                <div 
                    onClick={() => {
                    router.push(link.link)
                    }}
                    className={classes.profile__links__item}
                >
                    <div className={classes.profile__links__item__data}>
                        <div className={classes.profile__links__item__data__title}>{link.title}</div>
                        <div>
                            {svgSprite(link.svg)}
                        </div>
                    </div>
                    <div className={classes.profile__links__item__arrow}>
                        {svgSprite('ArrowRight')}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProfileLink