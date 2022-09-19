import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchHeader from '../components/search-header/SearchHeader';

function Search() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="" href="" />
      </Head>

      <SearchHeader />
    </div>
  );
}

export default Search;