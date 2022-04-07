import React, {
    useState
} from 'react'
import svgSprite from '../../../project/svg/svgSprite'
import FilterDataSection from './components/data/FilterDataSection'
import GridDataSection from './components/data/GridDataSection'
import HeaderGridData from './components/data/HeaderGridData'
import SearchData from './components/data/SearchData'

const DataSection = ({
    classes,
    platform
}) => {
    const [gridData, setGridData] = useState(platform)

    return (
        <div className={classes.data}>
            <div className={classes.container}>
                <div>
                    {/* <div>
                        <SearchData 
                            classes={classes}
                        />
                    </div> */}
                    <div className={classes.dataSection}>
                        <div className={classes.dataSection__filter}>
                            <FilterDataSection 
                                classes={classes}
                                gridData={gridData}
                            />
                        </div>
                        <div className={classes.dataSection__grid}>
                            <HeaderGridData 
                                classes={classes}
                            />
                            <GridDataSection 
                                classes={classes}
                                gridData={gridData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DataSection