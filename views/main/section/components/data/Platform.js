import { useRouter } from 'next/router'
import React from 'react'
import { NET } from './../../../../../network';

const Platform = ({
    classes,
    platform,
    idx
}) => {
    const {courses, company} = platform
    const router = useRouter()
    const goToPlatform = () => {
        router.push(company.link)
    }
    return (
        <div 
            className={classes.platform_wrapper}
            key={idx}
            onClick={goToPlatform}
            >
            <div 
                className={classes.platform}
            >
                <div className={classes.platform__body}>
                    {/* <div className={classes.platform__body__head}>
                        <div className={classes.platform__body__head__word}>Подписка</div>
                    </div> */}
                    <div className={classes.platform__body__logo}>
                        {company.logo && <img src={`${NET.FRONT_URL}/storage/image/${company.logo}`} />}
                    </div>
                    <div className={classes.platform__body__header}>
                        <div className={classes.platform__body__header__image}>
                            {company.image && <img src={`${NET.FRONT_URL}/storage/image/${company.image}`} />}
                        </div>
                        <div dangerouslySetInnerHTML={{__html: company?.offer}} className={classes.platform__body__header__offer}></div>
                    </div>
                    <div className={classes.platform__body__description} dangerouslySetInnerHTML={{__html: company?.small_description}}></div>
                    <div className={classes.platform__body__courseTitle}>Курсы</div>
                    <ul className={classes.platform__body__courses}>
                        {courses.length && courses.map((elem, idx) => (
                            <li key={`course${idx}`}>{elem?.title}</li>
                        ))}
                    </ul>
                    <div className={classes.platform__body__name}>Платформа: <span className={classes.platform__body__name_}>{company?.name}</span></div>
                    <div className={classes.platform__body__author}>Автор: {company?.author}</div>
                    <div className={classes.platform__body__btnPay}>
                        <div className={classes.platform__body__btnPay__button}>
                            <div>₴ {company?.pay}/мес</div>
                        </div>
                    </div>
                    <div className={classes.platform__body__hashtag}>
                        <div className={classes.platform__body__hashtag__wrapper}>
                            {company.hashtag && JSON.parse(company.hashtag).map((tag) => (
                                <div>#{tag}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div onClick={goToPlatform} className={classes.platform__button}>
                    <div className={classes.platform__button__text}>
                        Перейти на платформу
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export default Platform