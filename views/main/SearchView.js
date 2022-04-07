import React, {
    useState
} from 'react'
import classes from './../../styles/views/main/category-view.module.scss';
import CategoryItem from './section/category/CategoryItem';

const SearchView = ({
    data
}) => {
    let dataCourses = []
    data.data.map(el => {
        el.courses.map((course) => {
            dataCourses.push(course)
        })
    })
    const restuctureData = {
        category: {
            title: 'Результаты поиска'
        },
        companies: data.data.map((el) => el.company),
        dataCourses
    }
    const [gridData, setGridData] = useState(restuctureData)
    return (
        <div className={classes.container__mobile}>
            <div className={classes.category}>
                <CategoryItem 
                    classes={classes}
                    gridData={gridData}
                    noCourseTitle={true}
                />
            </div>
        </div>
    )
}
export default SearchView