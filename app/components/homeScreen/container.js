import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Paper, CircularProgress, RaisedButton } from 'material-ui';
import { getFilmList } from '../../stores/homeScreen/actions';
import R from 'ramda';

import Episode1Image from '../../www/images/episode-1.jpg';
import Episode2Image from '../../www/images/episode-2.jpg';
import Episode3Image from '../../www/images/episode-3.jpg';
import Episode4Image from '../../www/images/episode-4.jpg';
import Episode5Image from '../../www/images/episode-5.jpg';
import Episode6Image from '../../www/images/episode-6.jpg';
import Episode7Image from '../../www/images/episode-7.jpg';

const propTypes = {
  getFilms: PropTypes.func,
  loadingFilmList: PropTypes.bool,
  filmList: PropTypes.array,
  history: PropTypes.object,
  loadingEpisode: PropTypes.bool,
};

class HomeScreen extends Component {
  componentWillMount() {
    this.props.getFilms();
  }

  getEpisodeImage(episode) {
    return R.call(R.cond([
      [R.equals(1), R.always(Episode1Image)],
      [R.equals(2), R.always(Episode2Image)],
      [R.equals(3), R.always(Episode3Image)],
      [R.equals(4), R.always(Episode4Image)],
      [R.equals(5), R.always(Episode5Image)],
      [R.equals(6), R.always(Episode6Image)],
      [R.equals(7), R.always(Episode7Image)],
      [R.T, R.always('')],
    ]), episode);
  }

  goToEpisode(filmId) {
    this.props.history.push(`/episode/${filmId}`);
  }

  render() {
    const {
      loadingFilmList,
      filmList,
      loadingEpisode,
    } = this.props;

    return (
      <Paper className="home-screen-container">
        {
          loadingFilmList ?
            <div className="circular-loader-style">
              <CircularProgress />
            </div> :
            <div className="film-list-container">
              {
                filmList.map((film, i) => {
                  const filmTitle = R.propOr('', 'title', film);
                  const episodeId = R.propOr('', 'episode_id', film);
                  const filmUrl = R.propOr('', 'url', film);
                  // episode_id does not match :id in api
                  const filmId = R.call(R.compose(R.last, R.dropLast(1), R.split('/')), filmUrl);
                  return (
                    <div key={i} className="two-percent-padding">
                      <div className="center-items">
                        <img
                          src={this.getEpisodeImage(episodeId)}
                          height="400"
                          alt={`${filmTitle} Image`}
                          className="episode-image"
                          onClick={() => this.goToEpisode(filmId)}
                        />
                      </div>
                      <div className="center-items">
                        <RaisedButton
                          primary
                          label={`Go To ${filmTitle}`}
                          className="film-button"
                          onClick={() => this.goToEpisode(filmId)}
                          disabled={loadingEpisode}
                        />
                      </div>
                    </div>
                  );
                })
              }
            </div>
        }
      </Paper>
    );
  }
}

const mapStateToProps = ({ homeScreen, episode }) => ({
  loadingEpisode: episode.get('loadingEpisode'),
  loadingFilmList: homeScreen.get('loadingFilmList'),
  filmList: homeScreen.get('filmList').toJS(),
});

const mapDispatchToProps = dispatch => ({
  getFilms: () => dispatch(getFilmList()),
});

HomeScreen.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
