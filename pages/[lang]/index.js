import Head from 'next/head'
import Main from '../../layouts/main/Main'
import styles from '../../styles/Home.module.css'
import MainView from '../../views/main/MainView'
import { NET } from './../../network';

function Home({
  platform
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>MION - Образовательная социальная сеть | MION SOCIAL Профессиональное образование доступное каждому | Создана в Украине | Мион</title>
        <meta name="description" content="MION - это более 100 профессиональных и аматорских курсов от МИОН по различным направлениям. IT, ЗНО, Красота и здоровье, Обучение английскому, развитие ребенка и многое другое. Преподователи и участники сети с более чем 5 летним опытом работы в своей сфере дают Вам максимально четкие и качественные знания. Прикоснись к образоваению будущего вместе с MION. MION SOCIAL - это образование будущего" />
        <meta name="keywords" content="MION, MION SOCIAL, MION COURSES, Мион сеть, Мион, Образование, Профессиональное образование, Курсы по IT, Курсы по английскому, Сдать ЗНО, Получить профессию, тренды 2022, Устроится на работу в иностранную компанию" />
        <meta name="authors" content="Матвей Василенко | MION" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TM0LJQ95RR"></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TM0LJQ95RR');`}}>          
        </script>
      </Head>

      <main className={styles.main}>
        <Main>
            <MainView 
              platform={platform}
            />
        </Main>
      </main>

      
    </div>
  )
}

export async function getServerSideProps({req, params}) {
  const headers = {
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;charset=UTF-8',
          // Authorization: `Bearer ${userToken}`
      },
      method: 'GET'
  };

  const resPlatform = await fetch(
      `${NET.BACK_URL}/mion/site`,
      headers,
  );
  const platform = await resPlatform.json()


  return {
    props: {
      platform: JSON.parse(JSON.stringify(platform)),
      // modules: JSON.parse(JSON.stringify(modules)),
      // company: JSON.parse(JSON.stringify(company))
    } // will be passed to the page component as props
  }
}

export default Home
