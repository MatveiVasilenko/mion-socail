import React from 'react'
import svgSprite from '../../../../project/svg/svgSprite';
import Slider from '../../../../widgets/slider/Slider'
import { NET } from './../../../../network';
import { useRouter } from 'next/router';

const CategoryItem = ({
    classes,
    gridData,
    noCourseTitle = false
}) => {
    const {
        category,
        companies,
        dataCourses
    } = gridData
    const router = useRouter()
    const goToPlatform = (link) => {
        router.push(link)
    }
    const stayParthers = () => {
        router.push('https://drive.google.com/file/d/1n80KshGKy-4vp9Gjvgkbu2OlHF-oEavq/view')
    }
    return (
        <div>
            <div className={classes.category__mainTitle}>{category.title}</div>
            {/* PLATFORM */}
            <div className={classes.category__headerTitle}>
                <div className={classes.category__title}>Платформы</div>
                {/* <div className={classes.category__svg}>
                    {svgSprite('ArrowRight')}
                </div> */}
            </div>
            <Slider>
                {companies.map((company, idx) => (
                    <div 
                        key={`company${idx}`} 
                        className={classes.category__w70}
                        onClick={() => goToPlatform(company.link)}
                        >
                        <div className={classes.category__w70__item}>
                            {company.logo && <div className={classes.category__w70__item__logo}>
                                <img src={`${NET.FRONT_IMAGE_URL}/${company.logo}`} />
                            </div>}
                            <div className={classes.category__w70__item__body}>
                                {company.image && <div className={classes.category__w70__item__body__image}>
                                    <img src={`${NET.FRONT_IMAGE_URL}/${company.image}`} />
                                </div>}
                                <div className={classes.category__w70__item__body__offer}>{company?.offer}</div>
                                <div className={classes.category__w70__item__body__hashtag}>
                                    {company.hashtag && JSON.parse(company.hashtag).map((hash, idx) => (
                                        <div key={`hash${idx}`}>#{hash}</div>
                                    ))}
                                </div>
                            </div>
                            <div className={classes.category__w70__item__love}>
                                {svgSprite('Love')}
                            </div>
                        </div>
                        {/* <div className={classes.category__w40__author}>{company.name}</div> */}
                        {/* <div className={classes.category__w40__text} dangerouslySetInnerHTML={{__html: company.about_author}}></div> */}
                    </div>
                ))}
            </Slider>

            {/* COURSES */}
            <div className={classes.category__headerTitle}>
                <div className={classes.category__title}>{noCourseTitle ? 'Курсы' : 'Курсы по '+ category.title}</div>
                {/* <div className={classes.category__svg}>
                    {svgSprite('ArrowRight')}
                </div> */}
            </div>
            <Slider 
            >
                {dataCourses.map((course, idx) => (
                    <div 
                        key={`company${idx}`} 
                        className={classes.category__w85}
                        onClick={() => router.push(`/ru/course/${course.id}`)}
                        >
                    <div className={classes.category__w85__item}>
                        {course.img ? <img src={`${NET.FRONT_IMAGE_URL}/${course.img.substr(6)}`} /> : <div className={classes.category__w85__item__noImg}>
                                {course.title}
                            </div>}
                    </div>
                </div>
                ))}
            </Slider>  
            
            {/* AUTHOR */}
            <div className={classes.category__headerTitle}>
                <div className={classes.category__title}>Авторы курсов</div>
                {/* <div className={classes.category__svg}>
                    {svgSprite('ArrowRight')}
                </div> */}
            </div>
            <Slider>
                {companies.map((company, idx) => (
                    <div 
                        key={`company${idx}`} 
                        className={classes.category__w40}
                        onClick={() => goToPlatform(company.link)}
                        >
                        <div className={classes.category__w40__item}>
                            <div className={classes.category__w40__item__hashtag}>
                                #{company.hashtag ? JSON.parse(company.hashtag)[0] : ''}
                            </div>
                            {company.logo && <div className={classes.category__w40__item__logo}>
                                <img src={`${NET.FRONT_IMAGE_URL}/${company.logo}`} />
                            </div>}
                            {company.image_author && <div className={classes.category__w40__item__author}>
                                <img src={`${NET.FRONT_IMAGE_URL}/${company.image_author}`} />
                            </div>}
                        </div>
                        <div className={classes.category__w40__author}>{company.author}</div>
                        <div className={classes.category__w40__text} dangerouslySetInnerHTML={{__html: company.about_author}}></div>
                    </div>
                ))}
            </Slider>

            {/* PARTHERS */}
            <div className={classes.category__headerTitle}>
                <div className={classes.category__title}>Наши партнеры</div>
                {/* <div className={classes.category__svg}>
                    {svgSprite('ArrowRight')}
                </div> */}
            </div>
            <Slider 
                vertical={true}
                mbnone={true}
            >
                {companies.map((company, idx) => (
                    <div 
                        key={`company${idx}`} 
                        className={classes.category__w30}
                        onClick={() => goToPlatform(company.link)}
                        >
                        <div className={classes.category__w30__item}>
                            <img src={`${NET.FRONT_IMAGE_URL}/${company.logo}`} />
                        </div>
                    </div>
                ))}
            </Slider>  
            <div
                className={classes.category__btnWantMion}
                onClick={stayParthers}
                >Хочу стать партнером MION</div>
        </div>
    )
}
export default CategoryItem