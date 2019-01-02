import Link from 'next/link';

const indexPage = ({ movies }) => (
  <div>
    <nav>
      <Link href="/movies">
        <a>Movies</a>
      </Link>
    </nav>
    <div>Welcome to next.js!</div>
  </div>
);

export default indexPage;
