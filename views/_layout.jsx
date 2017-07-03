const React = require('react');
const PropTypes = require('prop-types');


class Layout extends React.Component {
  render() {
    const {
      title,
      children,
    } = this.props;

    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <script dangerouslySetInnerHTML={{__html:`
            console.log('hello world');
          `}}/>
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

module.exports = Layout;
