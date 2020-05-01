import * as React from 'react';
import Resource from '../resources/Resource';

export default class MainPage extends React.Component {
  render() {
    return (
      <nav className="nav-extended green darken-1">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">{Resource.getString('title')}</a>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">{Resource.getString('introduction')}</a></li>
            <li className="tab"><a href="#test1">{Resource.getString('reservation')}</a></li>
            <li className="tab"><a href="#test1">{Resource.getString('directions')}</a></li>
            <li className="tab"><a href="#test1">{Resource.getString('blog')}</a></li>
          </ul>
        </div>
      </nav>
      );
    }
  }
