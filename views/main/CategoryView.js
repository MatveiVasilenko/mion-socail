import React, {
    useState
} from 'react'
import CategorySection from './section/CategorySection'
import classes from './../../styles/views/main/category-view.module.scss';
import FooterSection from './section/FooterSection';
import Slider from '../../widgets/slider/Slider';
import CategoryItem from './section/category/CategoryItem';

const CategoryView = ({
    data
}) => {
    const [gridData, setGridData] = useState(data)
    return (
        <div className={classes.container__mobile}>
            <div className={classes.category}>
                <CategoryItem 
                    classes={classes}
                    gridData={gridData}
                />
            </div>
        </div>
    )
}
export default CategoryView