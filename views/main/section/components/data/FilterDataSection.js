import React from 'react'
import { getData } from '../../../../../common/utils'
import { NET } from './../../../../../network';

const FilterDataSection = ({
    classes,
    gridData
}) => {
    const switchCategory = (id) => {
        const data = getData(`${NET.BACK_URL}/site/keyword/${id}`)
        console.log(data)
    }
    return (
        <div className={classes.filter}>
            <div>
                <div>Все</div>
                {gridData.categories && gridData.categories.map((category) => (
                    <div onClick={() => switchCategory(category.id)}>{category.title}</div>
                ))}
            </div>
        </div>
    )
}
export default FilterDataSection