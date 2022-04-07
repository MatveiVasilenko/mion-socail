import React from 'react'

const FilterLovesItem = ({
    classes,
    filt,
    idx,
    activeFilter,
    setActiveFilter
}) => {
    const handlerFilter = () => {
        setActiveFilter(filt.value)
    }
    return (
        <div 
            key={`filt${idx}`}
            className={activeFilter === filt.value ? [classes.loves__filter__item, classes.loves__filter__item_active].join(' ') : classes.loves__filter__item}
            onClick={handlerFilter}
        >{filt.title}</div>
    )
}

export default FilterLovesItem