import React, {
    useState
} from 'react'
import CategorySection from './section/CategorySection'
import classes from './../../styles/views/main/main-view.module.scss';
import FooterSection from './section/FooterSection';

const CategoriesView = ({
    data
}) => {
    const [gridData, setGridData] = useState(data)
    return (
        <div>
            <CategorySection 
                classes={classes}
                gridData={gridData}
                page={true}
            />
        </div>
    )
}
export default CategoriesView