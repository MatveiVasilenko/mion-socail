import React, {
    useState
} from 'react'
import { NET } from './../../../network';
import { useRouter } from 'next/router';

const CategorySection = ({
    classes,
    gridData,
    page = false
}) => {
    console.log(gridData)
    const [categoryData, setCategoryData] = useState(gridData?.categories)
    const router = useRouter()
    const openCategory = (url) => {
        router.push(`/ru/categories/${url}`)
    }
    return (
        <div className={classes.container}>
            <div className={classes.categories}>
                {/* First line */}
                <div onClick={() => openCategory(categoryData[0].url)} style={{
                    backgroundImage: categoryData[0] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[0].image})` : ''
                }} className={classes.categories__block}>
                    <div className={classes.categories__block__title}>{categoryData[0] ? categoryData[0].title : ''}</div>
                </div>
                <div className={classes.categories__block}>
                    <div onClick={() => openCategory(categoryData[1].url)} style={{
                        backgroundImage: categoryData[1] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[1].image})` : ''
                    }}
                    className={classes.categories__block__small}>
                        <div className={classes.categories__block__title_light}>{categoryData[1] ? categoryData[1].title : ''}</div>
                    </div>
                    <div onClick={() => openCategory(categoryData[2].url)} style={{
                        backgroundImage: categoryData[2] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[2].image})` : ''
                    }} className={classes.categories__block__small}>
                        <div className={classes.categories__block__title_light}>{categoryData[2] ? categoryData[2].title : ''}</div>
                    </div>
                </div>
                {/* End first line */}
                {/* Second line */}
                <div onClick={() => openCategory(categoryData[3].url)} style={{
                        backgroundImage: categoryData[3] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[3].image})` : ''
                    }} className={[classes.categories__block, classes.categories__block_mini].join(' ')}>
                        <div className={classes.categories__block__title_light}>{categoryData[3] ? categoryData[3].title : ''}</div>
                    </div>
                <div onClick={() => openCategory(categoryData[4].url)} style={{
                    backgroundImage: categoryData[4] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[4].image})` : ''
                }} className={[classes.categories__block, classes.categories__block_mini].join(' ')}>
                    <div className={classes.categories__block__title_specialLight}>{categoryData[4] ? categoryData[4].title : ''}</div>
                </div>
                {/* End second line */}
                {/* Third line */}
                <div className={classes.categories__block}>
                    <div onClick={() => openCategory(categoryData[5].url)} style={{
                        backgroundImage: categoryData[5] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[5].image})` : ''
                    }}
                    className={classes.categories__block__small}>
                        <div className={classes.categories__block__title_specialDark}>{categoryData[5] ? categoryData[5].title : ''}</div>
                    </div>
                    <div onClick={() => openCategory(categoryData[6].url)} style={{
                        backgroundImage: categoryData[6] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[6].image})` : ''
                    }} className={classes.categories__block__small}>
                        <div className={classes.categories__block__title_specialLight}>{categoryData[6] ? categoryData[6].title : ''}</div>
                    </div>
                </div>
                <div onClick={() => openCategory(categoryData[7].url)} style={{
                    backgroundImage: categoryData[7] ? `url(${NET.FRONT_IMAGE_URL}/${categoryData[7].image})` : ''
                }} className={classes.categories__block}>
                    <div className={classes.categories__block__title_specialTopLight}>{categoryData[7] ? categoryData[7].title : ''}</div>
                </div>
                {/* End third line */}
                {page && categoryData.slice(8).map((category) => (
                    <div 
                        onClick={() => openCategory(category.url)}
                        style={category.image ? {
                            backgroundImage: `url(${NET.FRONT_IMAGE_URL}/${category.image})`,
                        } : {
                            background: 'linear-gradient(144.95deg, #BEEFFF 21.86%, #CBFFEF 80.46%)'
                        }} 
                        className={[classes.categories__block, classes.categories__block_mini].join(' ')}>
                        <div className={classes.categories__block__title_light}>{category ? category.title : ''}</div>
                    </div>
                ))}
            </div>
            {!page && <div>
                <div className={classes.allCategory} onClick={() => router.push('/ru/categories')}>Все категории</div>
            </div>}
        </div>
        
    )
}
export default CategorySection