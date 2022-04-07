import React from 'react'
import Platform from './Platform'

const GridDataSection = ({
    gridData,
    classes
}) => {
    return (
        <div>
            <div className={classes.platformWrapper}>
                {gridData?.data.length && gridData.data.map((platform, idx) => (
                    <Platform 
                        platform={platform}
                        classes={classes}
                        idx={idx}
                    />
                ))}
            </div>
        </div>
    )
}
export default GridDataSection