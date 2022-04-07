import React, {
    useEffect, useState,
} from 'react'
import { NET } from '../../../network';
import svgSprite from '../../../project/svg/svgSprite'
import firstImg from './../../../project/images/first.png'
import FirstSectionMobile from './mobile/FirstSectionMobile';
import { getData } from './../../../common/utils';

const FirstSection = ({
    classes,
    lang,
    keywords = []
}) => {
    const contentData = {
        ru: {
            seoTitle: 'MiON - образовательная социальная сеть',
            topTitle: 'Образовательная социальная сеть',
            title: 'Профессиональное образование<br/> доступное каждому',
            bottomTitle: 'Выводим образование нашей страны<br/> на новый DIGITAL уровень',
            search: 'Что бы Вы хотели изучить?'
        }
    }

    const [showWindowSearch, setShowWindowSearch] = useState(false)
    const [searchData, setSearchData] = useState([])
    const searchHandler = async (e) => {
        if (e.target.value) {
            setShowWindowSearch(true)
            const data = await getData(
                `${NET.BACK_URL}/mion/search?q=${e.target.value}`
            )
            setSearchData(data.data)
        } else {
            setShowWindowSearch(false)
        }
    }
    const searchFunc = (id) => {
        window.location.href = `${NET.FRONT_URL_MAIN}/${lang}/categories/search?q=${id}`
    }
    return (
        <div>
            <div className={classes.first}>
                <div className={[classes.container, classes.container__first].join(' ')}>
                    <div className={classes.firstSection}>
                        <div className={classes.firstSection__blockText}>
                            <h1 style={{
                                display: 'none'
                            }}>{contentData[lang]?.seoTitle}</h1>
                            <div dangerouslySetInnerHTML={{__html: contentData[lang]?.topTitle}} className={[classes.firstSection__blockText__toptitle, 'wow', 'fadeInDown', 'animated'].join(' ')}></div>
                            <div dangerouslySetInnerHTML={{__html: contentData[lang]?.title}} className={[classes.firstSection__blockText__title, 'wow', 'fadeInDown', 'animated'].join(' ')} data-wow-duration={2}></div>
                            <div dangerouslySetInnerHTML={{__html: contentData[lang]?.bottomTitle}} className={[classes.firstSection__blockText__subtitle, 'wow', 'fadeInDown', 'animated'].join(' ')}></div>
                            <div className={[classes.firstSection__blockText__button, 'wow', 'fadeInUp', 'animated'].join(' ')}>
                                <div className={classes.firstSection__blockText__button__search}>
                                    {svgSprite('Search')}
                                </div>
                                <div className={classes.firstSection__blockText__button__text}>
                                    <input name="first" onChange={searchHandler} placeholder={contentData[lang]?.search} />
                                </div>
                                {showWindowSearch && <div className={classes.firstSection__blockText__button__window}>
                                    <div className={classes.firstSection__blockText__button__window__title}>Результаты поиска</div>
                                    {typeof searchData === 'object' && searchData.length ? searchData.map((s, idx) => (
                                        <div 
                                            key={`s${idx}`}
                                            className={classes.firstSection__blockText__button__window__item}
                                            onClick={() => searchFunc(s.id)}
                                            >
                                            <div>{s.word}</div>
                                            <div className={classes.firstSection__blockText__button__window__item__svg}>
                                                {svgSprite('ArrowRight')}
                                            </div>
                                        </div>
                                    )) : <div>Нет результатов</div>}
                                </div>}
                            </div>                   
                        </div>
                        <div className={classes.firstSection__blockTextImage}>
                            <div className={classes.firstSection__blockTextImage__image}>
                                <img src={firstImg}/>
                                <div className={classes.firstSection__blockTextImage__image__rect}>
                                    {svgSprite('First', {
                                        width: '100%'
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.firstSection__hashtags}>
                    <div className={classes.firstSection__hashtags__wrapper}>
                        {keywords && keywords.map((el) => (
                            <div className={classes.firstSection__hashtags__wrapper__item}>#{el.word}</div>
                        ))}
                    </div>
                    <div className={classes.firstSection__gerb}>
                        <div className={classes.firstSection__gerb__item}>
                            {svgSprite('Gerb')}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.first_mobile}>
                <FirstSectionMobile 
                    classes={classes}
                />
            </div>
        </div>
    )
}
export default FirstSection