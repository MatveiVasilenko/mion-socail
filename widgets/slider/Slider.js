import React from 'react'
import classes from './../../styles/widgets/slider.module.scss'

const Slider = ({
    children,
    vertical = false,
    mbnone = false
}) => {
    return (
        <div style={{
            alignItems: vertical ? 'center' : 'flex-start',
            marginBottom: mbnone ? '6px' : '16px'
        }} className={classes.slider}>
            {children}
        </div>
    )
}
export default Slider