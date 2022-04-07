import React, {
    useState, useEffect
} from 'react'
import classes from './../../styles/views/main/main-view.module.scss';
import DataSection from './section/DataSection';
import FirstSection from './section/FirstSection';
import CategorySection from './section/CategorySection';
import CategoryView from './CategoryView';
import SponsorSection from './section/SponsorSection';

const MainView = ({
    platform
}) => {
    const [gridData, setGridData] = useState(platform)
    const lang = 'ru'
    return (
        <div>
            <FirstSection 
                classes={classes}
                lang={lang}
                keywords={platform?.keywords?.data}
            />
            <CategorySection 
                classes={classes}
                gridData={gridData}
            />
            {platform.data.map((item) => (
                <CategoryView 
                   data={item} 
                />
            ))}
            {/* <DataSection 
                classes={classes}
                platform={platform}
            /> */}
            <SponsorSection 
                classes={classes}
            />
        </div>
    )
}
export default MainView