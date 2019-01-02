import { Component } from 'react';
import Link from 'next/link';

import InputText from '../components/InputText';
import TextArea from '../components/TextArea';

class MovieEdit extends Component {
  static async getInitialProps({ query }) {
    const id = query.id;
    const rsp = await fetch(`http://localhost:3001/api/movies/${id}`);
    const movie = await rsp.json();
    return { movie };
  }

  onChange = e => {
    this.props.currentMoviePropChanged(e.prop, e.value);
  };

  save = e => {
    e.preventDefault();
    console.log(this.props.movie);
    this.props.clearMovies();

    const id = this.props.match.params.id;
    const { movie } = this.props;

    fetch('/api/movies/' + id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify(movie)
    }).then(() => this.props.history.push('/movies'));
  };

  render() {
    const { movie } = this.props;
    if (!movie) return null;

    return (
      <form>
        <InputText onChange={this.onChange} prop="title" value={movie.title}>
          Title
        </InputText>
        <TextArea
          onChange={this.onChange}
          prop="overview"
          value={movie.overview}
        >
          Overview
        </TextArea>
        <InputText
          onChange={this.onChange}
          prop="release_date"
          value={movie.release_date}
        >
          Release date
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="popularity"
          value={movie.popularity}
        >
          popularity
        </InputText>
        <InputText
          onChange={this.onChange}
          prop="vote_average"
          value={movie.vote_average}
        >
          vote average
        </InputText>

        <div className="btn-group">
          <button type="submit" onClick={this.save} className="btn btn-primary">
            Save
          </button>
          <Link href="/movies">
            <button className="btn btn-danger">Cancel</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default MovieEdit;
