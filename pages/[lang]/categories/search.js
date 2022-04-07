import Head from 'next/head'
import Main from '../../../layouts/main/Main'
import styles from '../../../styles/Home.module.css'
import CategoryView from '../../../views/main/CategoryView';
import SearchView from '../../../views/main/SearchView';
import { NET } from './../../../network';

function CategoriesSearch({
  data
}) {
    console.log(data)
    // const {category} = data
    return (
        <div className={styles.container}>
        <Head>
            <title>Поиск | MION | МИОН</title>
            {/* <meta name="description" content={category.seo_description} />
            <meta name="keywords" content={category.keywords} /> */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        </Head>

        <main className={styles.main}>
            <Main>
                <SearchView 
                    data={data}
                />
            </Main>
        </main>

      
    </div>
  )
}

export async function getServerSideProps({req, params, query}) {
  const headers = {
      headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json;charset=UTF-8',
          // Authorization: `Bearer ${userToken}`
      },
      method: 'GET'
  };

  const resData = await fetch(
      `${NET.BACK_URL}/mion/keyword/${query['q']}`,
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

export default CategoriesSearch
