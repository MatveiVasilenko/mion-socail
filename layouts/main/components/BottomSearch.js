import React, {useState} from 'react'
import svgSprite from '../../../project/svg/svgSprite'
import BottomWindowSearch from './BottomWindowSearch'
import { getData } from './../../../common/utils';
import { NET } from './../../../network';

const BottomSearch = ({
    classes,
    platform,
    refInput
}) => {
    const [showWindowSearch, setShowWindowSearch] = useState(false)
    const [searchData, setSearchData] = useState([])
    const searchHandler = async (e) => {
        if (e.target.value) {
            setShowWindowSearch(true)
            const data = await getData(
                `${NET.BACK_URL}/mion/search?q=${e.target.value}`
            )
            setSearchData(data.data)
        } else {
            setShowWindowSearch(false)
        }
    }
    return (
        <div className={classes.search}>
            {showWindowSearch && <BottomWindowSearch 
                classes={classes}
                searchData={searchData}
            />}
            <div 
                className={classes.search__item}
                >
                <div className={classes.search__item__svg}>
                    {svgSprite('SearchThin')}
                </div>
                <div className={classes.search__item__text}>
                    <input 
                        onChange={searchHandler}
                        placeholder="Что бы Вы хотели изучить?"
                        ref={refInput}
                        />
                </div>
            </div>  
        </div>
    )
}
export default BottomSearch