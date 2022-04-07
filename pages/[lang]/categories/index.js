import Head from 'next/head'
import Main from '../../../layouts/main/Main'
import styles from '../../../styles/Home.module.css'
import CategoriesView from '../../../views/main/CategoriesView';
import { NET } from './../../../network';

function Categories({
  data
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Категорий</title>
        <meta name="description" content="MION - это образовательная социальная сеть, где Вы можете найти знания по абсолютно любому направлению. IT, Английский язык, Обучение ЗНО, обучение парикмахерскому делу и многое другое" />
        <meta name="keywords" content="MION, Мион, Образование, Профессиональное образование, Курсы по IT, Курсы по английскому, Сдать ЗНО, Получить профессию, тренды 2022, Устроится на работу в иностранную компанию" />
        <meta name="authors" content="Матвей Василенко | MION" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      </Head>

      <main className={styles.main}>
        <Main>
          <CategoriesView 
            data={data}
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

  const resData = await fetch(
      `${NET.BACK_URL}/mion/categories`,
      headers,
  );
  const data = await resData.json()


  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      // modules: JSON.parse(JSON.stringify(modules)),
      // company: JSON.parse(JSON.stringify(company))
    } // will be passed to the page component as props
  }
}

export default Categories
