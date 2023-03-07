import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>
          This page doesn't exist. Back to <Link to="/">Home</Link>
        </h2>
      </div>
    );
  }
}
