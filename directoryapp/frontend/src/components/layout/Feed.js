import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlogs, getPodcasts, getFeeds } from '../../actions/feeds'

const divStyle = {
    width : '50%'
  };

const cardStyle = {
    minHeight: '25rem'
};
  
export class Feed extends Component {
    static propTypes = {
        feeds: PropTypes.array.isRequired,
        // getBlogs:PropTypes.func.isRequired,
        // getPodcasts:PropTypes.func.isRequired,
        getFeeds:PropTypes.func.isRequired,
    }

    componentDidMount() {
        //this.props.getBlogs()
        // this.props.getPodcasts()
        this.props.getFeeds()
    }
    openInNewTab = e => {
        e.persist();
        e.preventDefault();
        //console.log(e.target.href);
        var win = window.open(e.target.href, '_blank');
        win.focus();
    }
    
  render() {
    return (
      <div>
        {/* <h1>New Feed</h1> */}
        <div className="d-flex align-content-start flex-wrap">
            {/* <div className="card-deck"> */}
                {this.props.feeds.map(feed => (
                    <div key={feed.id} style={divStyle}>
                        <div className="card border-light rounded-lg shadow m-3" style={cardStyle}>
                            <div className="card-header border-bottom-0">{feed.author}</div>
                            <div className="card-body">
                            <h4 className="card-title">
                                <a onClick={this.openInNewTab} className="card-link" href={feed.url}>
                                    {feed.title}
                                </a>
                            </h4>
                                
                            </div>
                            <div className="card-footer bg-transparent border-0">
                                <small className="text-muted">{feed.itemType} | created {new Date(feed.created_at).toLocaleDateString()}</small>
                            </div>
                        </div>
                    </div>
                    
                ))}
            {/* </div>  */}
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
    feeds: state.feeds.feeds
});

export default connect(mapStateToProps, {getFeeds})(Feed);
