import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Projects} from './components/projects';
import {Project} from './components/project';
import {Router, Route, hashHistory} from 'react-router';

class App extends React.Component<React.Props<{}>, {}> {
    render() {
        return (
            <div>
                <header>header</header>

                {this.props.children}

                <footer>footer</footer>
            </div>
        );
    }
}

var routes = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="projects" component={Projects}/>
        <Route path="projects/:projectId" component={Project}/>
    </Route>
</Router>;

ReactDOM.render(routes, document.getElementById('content'));