import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer text-center" syle={{flex : 1}}>
            <div className="container">
                <p className="footer-text">Hello from footer</p>
            </div>
        </footer>
    );
  }
}
