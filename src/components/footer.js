import React from 'react';
import "../styles/base.scss";
import "../styles/footer.scss";


class Footer extends React.Component {
  render() {
    return (
      <>
      <footer>
        <a href="/" id="logo">DF</a>
        <a href="https://github.com/jbjbg/devfund-fe">GitHub Repo</a>
        <p>&copy;2019 JBJBG </p>
      </footer>
      </>
    );
  }
}

export default Footer;