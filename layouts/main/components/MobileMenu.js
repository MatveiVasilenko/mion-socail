import React, {
    useState, useEffect, useLayoutEffect, useRef
} from 'react' 
import { useRouter } from 'next/router'
import svgSprite from './../../../project/svg/svgSprite'
import BottomMobileMenu from './BottomMobileMenu'
import BottomSearch from './BottomSearch';

const MenuMobile = ({
    classes,
    lang
}) => {
    const router = useRouter()
    const goToPartner = () => {
        router.push('https://drive.google.com/file/d/1K-XIKEVcypozylDRW0COxTAfWnsgGEzx/view?usp=sharing')
    }
    const [showSearch, setShowSearch] = useState(false)
    const [platform, setPlatform] = useState('Windows')
    useEffect(() => {
        function detectOS() {
            const platform = navigator.platform.toLowerCase(),
                iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];
        
            if (platform.includes('mac')) return 'MacOS';
            if (iosPlatforms.includes(platform)) return 'iOS';
            if (platform.includes('win')) return 'Windows';
            if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
            if (/linux/.test(platform)) return 'Linux';
        
            return 'unknown';
        }     
        const pl = detectOS()  
        setPlatform(pl) 
    }, []);
    const [stopSearch, setStopSearch] = useState(false)

    useLayoutEffect(() => {
        if (!stopSearch) {
            const handleScroll = () => {
                const h = document.documentElement.clientHeight
                if ((h * 0.2) < window.scrollY) {
                    setShowSearch(true)
                } else {
                    setShowSearch(false)
                }
            }
        
            window.addEventListener('scroll', handleScroll)
        
            return () => window.removeEventListener('scroll', handleScroll)
        }
      })
      const refInput = useRef(null)
    return (
        <div className={classes.menu_mobile}>
            <div className={classes.menu_mobile__container}>
                <div className={classes.menuData}>
                    <div className={classes.menuData__wrapper}>
                        <div className={classes.menuData__wrapper__inner}>
                            <h1 style={{display: 'none'}}>MION - первая образовательная социальная сеть</h1>
                            <div className={classes.menuData__wrapper__inner__title}>Ваша образовательная социальная сеть</div>
                            <div className={classes.menuData__logo}>
                                {svgSprite('LogoMobile')}
                            </div>
                            <div 
                                style={{
                                    opacity: showSearch ? 0 : 1,
                                    transition: '0.1s all linear'
                                }} 
                                className={classes.menuData__search}
                                onClick={() => {
                                    setShowSearch(true)
                                    setStopSearch(true)
                                    console.log(refInput)
                                    // refInput
                                }}
                            >
                                <div className={classes.menuData__search__svg}>
                                    {svgSprite('SearchThin')}
                                </div>
                                <div className={classes.menuData__search__text}>Что бы Вы хотели изучить?</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={goToPartner} className={classes.menuData__button}>Стать партнером</div>
                </div>
            </div>
            {showSearch && <BottomSearch 
                classes={classes}
                platform={platform}
                refInput={refInput}
            />}
            <BottomMobileMenu 
                classes={classes}
                lang={lang}
                platform={platform}
                refInput={refInput}
            />
        </div>
    )
}
export default MenuMobile