import React from 'react';
import Link from 'next/link';

const MovieRow = ({ movie }) => (
  <tr>
    <td>{movie.title}</td>
    <td style={{ width: 1 }}>
      <Link
        className="btn btn-default btn-xs edit-button"
        href={`/movie/${movie.id}`}
      >
        <a>Edit</a>
      </Link>
    </td>
  </tr>
);

export default MovieRow;
