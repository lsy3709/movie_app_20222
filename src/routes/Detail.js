import React from 'react';
import '../components/Movie.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movie__data">
          <span>{location.state.title}</span>
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <h3 className="movie__title">{location.state.title}</h3>
          <h5 className="movie__year">{location.state.year}</h5>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
