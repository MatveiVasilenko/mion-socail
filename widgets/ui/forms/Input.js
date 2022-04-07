import React, { useState } from 'react'
import svgSprite from './../../../project/svg/svgSprite';

const Input = ({
    data,
    setData,
    attribute,
    classes,
    type = 'text',
    svgIcon,
    errors,
    placeholder
}) => {
    const [typeInput, setTypeInput] = useState(type)
    const handleChange = (e) => {
        setData({
            ...data,
            [attribute]: e.target.value
        })
    }
    const changeType = () => {
        if (typeInput === 'password') {
            setTypeInput('text')
        } else {
            setTypeInput('password')
        }
    }
    return (
        <div className={classes.input}>
            <div className={classes.input__item}>
                <input
                    type={typeInput}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                <div className={classes.input__item__svg}>
                    {svgSprite(svgIcon)}
                </div>
                {type === 'password' && <div onClick={changeType} className={classes.input__item__eye}>
                    {svgSprite('Eye')}
                </div>}
            </div>
                {errors && errors[attribute] && <div className={classes.input__item__error}>
                    <div>{errors[attribute]}</div>
                </div>}

        </div>
    )
}
export default Input