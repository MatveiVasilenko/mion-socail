import React from 'react'
import PhoneInput from 'react-phone-input-2'
import svgSprite from './../../../project/svg/svgSprite';

const EditorPhone = ({
    title,
    placeholder,
    dataItem,
    setDataItem,
    attribute,
    errors,
    svgIcon = 'AuthPhone',
    classes
}) => {
    return (
        <div className={classes.input}>
            <div className={classes.input__item} >
                {svgIcon && (<div className={classes.input__item__svg}>
                    {svgSprite(svgIcon)}
                </div>)}
                <PhoneInput 
                    country={'ua'} 
                    placeholder={placeholder} 
                    value={dataItem[attribute]} 
                    type="phone"
                    onChange={(e) => {
                        setDataItem({
                            ...dataItem,
                            [attribute]: e
                        })
                    }}
                />
            </div>
            {errors && errors[attribute] && <div className={classes.input__item__error}>
                    <div>{errors[attribute]}</div>
                </div>}
        </div>
    )
}
export default EditorPhone