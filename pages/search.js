import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchHeader from '../components/search-header/SearchHeader';
import SearchResults from '../components/SearchResults';
import { dummyData } from '../data';

function Search({ results }) {
  const router = useRouter();

  console.log(results);

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="" href="" />
      </Head>

      <SearchHeader />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? dummyData
    : await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

  // Inject the results prop into the search page's props
  return {
    props: {
      results: data,
    },
  };
}
