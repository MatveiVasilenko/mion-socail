import Head from 'next/head'
import Main from '../../../layouts/main/Main'
import styles from '../../../styles/Home.module.css'
import { NET } from './../../../network';
import LovesView from './../../../views/main/LovesView';

function Loves({
//   data
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>MION - Образовательный портал #1 | Профессиональное образование доступное каждому</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
      </Head>

      <main className={styles.main}>
        <Main>
          <LovesView />
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

//   const resData = await fetch(
//       `${NET.BACK_URL}/mion/categories`,
//       headers,
//   );
//   const data = await resData.json()


  return {
    props: {
    //   data: JSON.parse(JSON.stringify(data)),
      // modules: JSON.parse(JSON.stringify(modules)),
      // company: JSON.parse(JSON.stringify(company))
    } // will be passed to the page component as props
  }
}

export default Loves
