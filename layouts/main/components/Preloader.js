import React, {
    useState, useEffect
} from 'react'
import logo from './../../../project/images/logo.png'

const Preloader = ({
    classes
}) => {
    const [opacityPreloader, setOpacityPreloader] = useState(true)
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setOpacityPreloader(false)
            setTimeout(() => {
                setShowPreloader(false)
            }, 500)
        }, 1000)
    }, [])

    return (
        <div>
            {showPreloader && <div className={opacityPreloader ? classes.preloader : [classes.preloader, classes.preloader__opacity].join(' ')}>
                <div>
                    <div className={classes.preloader__logo}>
                        <img src={logo} />
                    </div>
                    <div className={classes.preloader__text}>Прикоснись к<br /> образованию будущего</div>
                </div>
            </div>}
        </div>
    )
}
export default Preloader