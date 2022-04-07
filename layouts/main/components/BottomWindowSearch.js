import React from 'react'
import svgSprite from './../../../project/svg/svgSprite';
import { useRouter } from 'next/router';
import { NET } from './../../../network';

const BottomWindowSearch = ({
    classes,
    searchData
}) => {
    const lang = 'ru'
    const searchFunc = (id) => {
        window.location.href = `${NET.FRONT_URL_MAIN}/${lang}/categories/search?q=${id}`
    }
    return (
        <div className={classes.searchWindow}>
            <div className={classes.searchWindow__title}>Результаты поиска</div>
            {typeof searchData === 'object' && searchData.length ? searchData.map((s, idx) => (
                <div 
                    key={`s${idx}`}
                    className={classes.searchWindow__item}
                    onClick={() => searchFunc(s.id)}
                    >
                    <div>{s.word}</div>
                    <div className={classes.searchWindow__item__svg}>
                        {svgSprite('ArrowRight')}
                    </div>
                </div>
            )) : <div>Нет результатов</div>}
        </div>
    )
}
export default BottomWindowSearch