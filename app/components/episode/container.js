import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CircularProgress, CardTitle, CardText, RaisedButton } from 'material-ui';
import { getEpisode as getEpisodeAction } from '../../stores/episode/actions';
import R from 'ramda';

const propTypes = {
  getEpisode: PropTypes.func,
  loadingEpisode: PropTypes.bool,
  match: PropTypes.object,
  title: PropTypes.string,
  openingCrawl: PropTypes.string,
  history: PropTypes.object,
};

class Episode extends Component {
  componentWillMount() {
    this.props.getEpisode(R.pathOr('', ['match', 'params', 'episodeId'], this.props));
  }

  render() {
    const {
      loadingEpisode,
      title,
      openingCrawl,
      history,
    } = this.props;

    return (
      <Card className="episode-container">
        <div className="two-percent-padding">
          {
            loadingEpisode ?
              <div className="circular-loader-style">
                <CircularProgress />
              </div> :
              <div>
                <CardTitle title={title} />
                <CardText>
                  <div>
                    {openingCrawl}
                  </div>
                </CardText>
              </div>
          }
          <RaisedButton label="Home" onClick={() => history.push('/')} primary className="home-button" />
        </div>
      </Card>
    );
  }
}

const mapStateToProps = ({ episode }) => ({
  loadingEpisode: episode.get('loadingEpisode'),
  title: episode.get('title'),
  openingCrawl: episode.get('opening_crawl'),
});

const mapDispatchToProps = dispatch => ({
  getEpisode: (...args) => dispatch(getEpisodeAction(...args)),
});

Episode.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Episode);
