import { useRouter } from 'next/router'
import React, {
    useState
} from 'react'
import Slider from '../../widgets/slider/Slider'
import classes from './../../styles/views/main/loves-view.module.scss'
import FilterLovesItem from './components/loves/FilterLovesItem'
import svgSprite from './../../project/svg/svgSprite';

const LovesView = () => {
    const filterLovesData = [
        {
            title: 'Все',
            value: 'all'
        },
        {
            title: 'Платформы',
            value: 'platform'
        }
    ]
    const [activeFilter, setActiveFilter] = useState('all') 
    const companies = []

    const router = useRouter()
    const goToPlatform = (link) => {
        router.push()
    }
    return (
        <div className={classes.loves}>
            <div className={classes.loves__mainTitle}>
                <div className={classes.loves__mainTitle__text}>Избранное</div>
                <div className={classes.loves__mainTitle__svg}>
                    {svgSprite('Love')}
                </div>
            </div>
            <div className={classes.loves__title}>Раздел находится в разработке :)</div>
            {/* <div className={classes.loves__filter}>
                {filterLovesData.map((filt, idx) => (
                    <FilterLovesItem 
                        classes={classes}
                        filt={filt}
                        idx={idx}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                ))}
            </div> */}

            {/* PLATFORM */}
            <div className={classes.loves__headerTitle}>
                {/* <div className={classes.loves__title}>Платформы</div> */}
                {/* <div className={classes.loves__svg}>
                    {svgSprite('ArrowRight')}
                </div> */}
            </div>
            <Slider>
                {companies.map((company, idx) => (
                    <div 
                        key={`company${idx}`} 
                        className={classes.loves__w70}
                        onClick={() => goToPlatform(company.link)}
                        >
                        <div className={classes.loves__w70__item}>
                            {company.logo && <div className={classes.loves__w70__item__logo}>
                                <img src={`${NET.FRONT_IMAGE_URL}/${company.logo}`} />
                            </div>}
                            <div className={classes.loves__w70__item__body}>
                                {company.image && <div className={classes.loves__w70__item__body__image}>
                                    <img src={`${NET.FRONT_IMAGE_URL}/${company.image}`} />
                                </div>}
                                <div className={classes.loves__w70__item__body__offer}>{company?.offer}</div>
                                <div className={classes.loves__w70__item__body__hashtag}>
                                    {company.hashtag && JSON.parse(company.hashtag).map((hash, idx) => (
                                        <div key={`hash${idx}`}>#{hash}</div>
                                    ))}
                                </div>
                            </div>
                            <div className={classes.loves__w70__item__love}>
                                {svgSprite('Love')}
                            </div>
                        </div>
                        {/* <div className={classes.loves__w40__author}>{company.name}</div> */}
                        {/* <div className={classes.loves__w40__text} dangerouslySetInnerHTML={{__html: company.about_author}}></div> */}
                    </div>
                ))}
            </Slider>

        </div>
    )
}
export default LovesView