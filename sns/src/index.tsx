import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/common/header';
import Content from './components/common/content';
ReactDOM.render(<Header />, document.getElementById('header') as HTMLElement);
ReactDOM.render(<Content />, document.getElementById("content") as HTMLElement);