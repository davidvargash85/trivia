import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

const Layout = ({ children }) => <main className='app layout'>{children}</main>;
Layout.Header = ({ children }) => <header className='app layout__header'>{children}</header>;
Layout.Body = ({ children }) => <div className="app layout__body">{children}</div>;
Layout.Footer = ({ children }) => <footer className="app layout__footer">{children}</footer>;

Layout.propTypes = {
  children: PropTypes.array.isRequired
};
Layout.Header.propTypes = {
  children: PropTypes.array.isRequired
};
Layout.Body.propTypes = {
  children: PropTypes.array.isRequired
};
Layout.Footer.propTypes = {
  children: PropTypes.array.isRequired
};

export default Layout;
