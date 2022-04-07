import React, {
    useEffect
} from 'react'
import Menu from './components/Menu'
import classes from './../../styles/layouts/main-layouts.module.scss';
import FooterMain from './components/FooterMain';
import Preloader from './components/Preloader';

const Main = ({
    children
}) => {
    useEffect(() => {
        if(typeof window !== 'undefined') {
    
          window.WOW = require('wowjs');
        }
        new WOW.WOW({
          mobile: false
        }).init();
      }, [])
      const lang = 'ru'
    return (
        <div>
            <Menu 
                classes={classes}
                lang={lang}
            />
            <Preloader 
                classes={classes}
            />
            <div>
                {children}
            </div>
            <FooterMain 
                classes={classes}
            />
        </div>
    )
}
export default Main