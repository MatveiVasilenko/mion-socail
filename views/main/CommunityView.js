import React from 'react'
import classes from './../../styles/views/main/community-view.module.scss'
import { useRouter } from 'next/router';

const CommunityView = () => {
    const router = useRouter()
    return (
        <div className={classes.community}>
            <div className={classes.community__titleMain}>Сообщество MION</div>
            <div className={classes.community__block}>
                <div className={classes.community__title}>Instagram</div>
                <div 
                    className={classes.community__item}
                    onClick={() => router.push('https://www.instagram.com/mion.social/')}
                    >
                    mion.social
                </div>
            </div>

            <div className={classes.community__block}>
                <div className={classes.community__title}>Telegram</div>
                <div>
                    <div 
                        className={classes.community__item}
                        onClick={() => router.push('https://t.me/+W6Cr3aA28X1iYWMy')}
                        >
                        MION
                    </div>
                    <div 
                        className={classes.community__item}
                        onClick={() => router.push('https://t.me/+Rs1iX46Lw_euN2Ra')}
                        >
                        MOTICH IT PRO
                    </div>
                    <div 
                        className={classes.community__item}
                        onClick={() => router.push('https://t.me/+Ig-_mndwnckzZWU6')}
                        >
                        ENSIDE
                    </div>
                    <div 
                        className={classes.community__item}
                        onClick={() => router.push('https://t.me/+w4B0cJjbRFFjOGQy')}
                        >
                        beZNervOv
                    </div>
                    <div 
                        className={classes.community__item}
                        onClick={() => router.push('https://t.me/+VTgRsjMFeYoDmP22')}
                        >
                        Блог основателя MiON
                    </div>

                </div>

            </div>
            <div className={classes.community__block}>
                <div className={classes.community__title}>Email</div>
                <a 
                    href="mailto:mion.courses@gmail.com"
                    className={classes.community__item}
                    >
                    mion.courses@gmail.com
                </a>
            </div>
            <div className={classes.community__block}>
                <div className={classes.community__title}>Phone</div>
                <a 
                    href="tel:+380979151281"
                    className={classes.community__item}
                    >
                    +38 (097) 91 51 281
                </a>
            </div>
            <div className={classes.community__block}>
                <div className={classes.community__title}>Author project</div>
                <div 
                    href="tel:+380979151281"
                    className={classes.community__item}
                    style={{
                        textDecoration: 'none'
                    }}
                    >
                    ФОП Василенко М.А. Номер регестрации: 22740000000048148
                </div>
            </div>
        </div>
    )
}
export default CommunityView