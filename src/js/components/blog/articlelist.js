import React from 'react';
import PropTypes from 'prop-types';
import ArticleItem from './articleitem';

export default class ArticleList extends React.Component {
  render() {
    const articlelist = this.props.issues.map(item => <ArticleItem key={item.id} number={item.number} title={item.title} labels={item.labels} time={item.updated_at} desc={item.body} />);
    return (
      <div className="archive-list">
        {articlelist}
      </div>
    );
  }
}

ArticleList.defaultProps = {
  issues: null,
};

ArticleList.propTypes = {
  issues: PropTypes.array,
};
