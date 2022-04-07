import React, {
    useState
} from 'react'
import { NET } from '../../network'
import svgSprite from '../../project/svg/svgSprite'
import classes from './../../styles/views/main/course-view.module.scss'
import { useRouter } from 'next/router';
import salesImg from './../../project/images/sales.png'
import giftImg from './../../project/images/gift.png'
import sub1 from './../../project/images/sub1.png'
import sub2 from './../../project/images/sub2.png'
import sub3 from './../../project/images/sub3.png'
import sub4 from './../../project/images/sub4.png'
import Slider from './../../widgets/slider/Slider';

const CourseView = ({
    data
}) => {
    const {
        course,
        planCourse,
        company,
        anotherCourses
    } = data
    const router = useRouter()
    const goToPlatform = () => {
        const link = company.link
        router.push(link)
    }
    return (
        <div className={classes.container__mobile}>
            <div className={classes.course__header}>
                <div className={classes.course__header__image}>
                    {data?.course?.img && <div className={classes.course__banner}>
                        <img src={`${NET.FRONT_IMAGE_URL}/${course.img.substr(6)}`} />
                    </div>}
                    <div onClick={goToPlatform} className={classes.course__subscribeText}>Подписка за 99 грн / 3.5$</div>
                </div>
                <div className={classes.course__header__desc}>
                    <div className={classes.title}>{course?.title}</div>
                    <div className={classes.course__title}>Описание курса</div>
                    <div className={classes.course__description} dangerouslySetInnerHTML={{__html: course.description}}></div>
                </div>
            </div>
            

            <div className={classes.course__title}>Программа курса</div>
            <ul className={classes.course__programs}>
                {planCourse.map((item, idx) => (
                    <li
                        key={`planCourse${idx}`}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
            <div className={classes.course__body}>
                <div className={classes.course__body__author}>
                    <div className={classes.course__title}>Автор и куратор курса</div>
                    <div className={classes.course__author}>
                        <div 
                            className={classes.course__w40}
                            onClick={goToPlatform}
                            >
                            <div className={classes.course__w40__item}>
                                <div className={classes.course__w40__item__hashtag}>
                                    #{company.hashtag ? JSON.parse(company.hashtag)[0] : ''}
                                </div>
                                {company.logo && <div className={classes.course__w40__item__logo}>
                                    <img src={`${NET.FRONT_IMAGE_URL}/${company.logo}`} />
                                </div>}
                                {company.image_author && <div className={classes.course__w40__item__author}>
                                    <img src={`${NET.FRONT_IMAGE_URL}/${company.image_author}`} />
                                </div>}
                            </div>
                        </div>
                        <div>
                            <div className={classes.course__w40__author}>{company.author}</div>
                            <div className={classes.course__w40__text} dangerouslySetInnerHTML={{__html: company.about_author}}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.course__body__platform}>
                    <div className={classes.course__title}>Платформа</div>
                    <div>
                        <div 
                            className={classes.course__w70}
                            onClick={goToPlatform}
                            >
                            <div className={classes.course__w70__item}>
                                {company.logo && <div className={classes.course__w70__item__logo}>
                                    <img src={`${NET.FRONT_IMAGE_URL}/${company.logo}`} />
                                </div>}
                                <div className={classes.course__w70__item__body}>
                                    {company.image && <div className={classes.course__w70__item__body__image}>
                                        <img src={`${NET.FRONT_IMAGE_URL}/${company.image}`} />
                                    </div>}
                                    <div className={classes.course__w70__item__body__offer}>{company?.offer}</div>
                                    <div className={classes.course__w70__item__body__hashtag}>
                                        {company.hashtag && JSON.parse(company.hashtag).map((hash, idx) => (
                                            <div key={`hash${idx}`}>#{hash}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className={classes.course__w70__item__love}>
                                    {svgSprite('Love')}
                                </div>
                            </div>
                            {/* <div className={classes.category__w40__author}>{company.name}</div> */}
                            {/* <div className={classes.category__w40__text} dangerouslySetInnerHTML={{__html: company.about_author}}></div> */}
                        </div>
                    </div>
                </div>
            </div>
            

            <div className={[classes.course__title, classes.course__title_center].join(' ')}>Выгодное предложение</div>
            <div className={classes.course__sales}>
                <div className={classes.course__sales__text}>
                    Оформляя подписку 
                    за <span className={classes.course__sales__text_accent}>99 грн</span> сегодня 
                    Вы получаете доступ 
                    <span className={classes.course__sales__text_accent}>{anotherCourses.length && (anotherCourses.length - 1) ? ` к ${anotherCourses.length - 1}` : ' ко всем'} {anotherCourses.length && (anotherCourses.length - 1) && anotherCourses.length === 2 ? 'курсу' : 'курсам'}</span> этого автора 
                    абсолютно бесплатно
                </div>
                <div className={classes.course__sales__image}> 
                    <img src={salesImg} />
                </div>
            </div>
            <div>
                <Slider 
                >
                    {anotherCourses.map((course, idx) => (
                        <div 
                            key={`company${idx}`} 
                            className={classes.course__w85}
                            onClick={() => router.push(`/ru/course/${course.id}`)}
                            >
                        <div className={classes.course__w85__item}>
                            <img src={`${NET.FRONT_IMAGE_URL}/${course.img.substr(6)}`} />
                        </div>
                        <div className={classes.course__w85__text} dangerouslySetInnerHTML={{__html: course.small_description}}></div>
                    </div>
                    ))}
                </Slider>  
            </div>
            
            <div>
                <div onClick={goToPlatform} className={classes.course__btnGiveCourse}>Получить все курсы за 99 грн</div>
            </div>

            <div className={[classes.course__title, classes.course__title_center].join(' ')}>Еще выгоднее</div>
            
            <div className={classes.course__gift}>
                <div className={classes.course__gift__image}>
                    <img src={giftImg} />
                </div>
                <div className={classes.course__gift__text}>
                    Также Вы можете оформить подписку на несколько месяцев и получить гарантированную <span className={classes.course__gift__text__accent}>скидку до</span> <span className={classes.course__gift__text__accentSales}>-60%</span>
                </div>
            </div>
            
            <div className={classes.course__subscription}>
                <div 
                    className={classes.course__subscription__item}
                    onClick={goToPlatform}
                    >
                    <div className={classes.course__subscription__item__image}>
                        <img src={sub1} />
                    </div>
                    <div 
                        style={{
                            background: 'rgba(21, 104, 198, 1)'
                        }} 
                        className={classes.course__subscription__item__btn}>Подписаться</div>
                </div>
                <div 
                    className={classes.course__subscription__item}
                    onClick={goToPlatform}
                    >
                    <div className={classes.course__subscription__item__image}>
                        <img src={sub2} />
                    </div>
                    <div style={{
                            background: '#FF072E'
                        }} 
                        onClick={goToPlatform}
                        className={classes.course__subscription__item__btn}>Подписаться</div>
                </div>
                <div 
                    className={classes.course__subscription__item}
                    onClick={goToPlatform}
                    >
                    <div className={classes.course__subscription__item__image}>
                        <img src={sub3} />
                    </div>
                    <div 
                        style={{
                            background: '#F99B31'
                        }} 
                        className={classes.course__subscription__item__btn}>Подписаться</div>
                </div>
                <div 
                    className={classes.course__subscription__item}
                    onClick={goToPlatform}
                    >
                    <div className={classes.course__subscription__item__image}>
                        <img src={sub4} />
                    </div>
                    <div style={{
                            background: '#009B8B'
                        }} 
                        className={classes.course__subscription__item__btn}>
                            Подписаться
                        </div>
                </div>
            </div>
        </div>
    )
}
export default CourseView