const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./_layout');

class Index extends React.Component {
  render() {
    const {
      title,
      isReady,
      stops,
      html,
    } = this.props;

    return (
      <Layout title={title} >
        <h1>{title}</h1>
        <p>
          Lorem ipsum...
        </p>
        { isReady ? (
          <p>Ready!</p>
        ) : (
          <p>Not ready</p>
        ) }
        <ul>
          { stops.map((st, i) => (
          <li key={i}>{st.name}</li>
          )) }
        </ul>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Layout>
    );
  }
}

Index.propTypes = {
  title: PropTypes.string,
  isReady: PropTypes.bool,
  stops: PropTypes.arrayOf(PropTypes.object),
  html: PropTypes.string,
};

module.exports = Index;
