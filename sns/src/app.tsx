import * as React from 'react';
import Header from './components/common/header';
export const App: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="main-content container">
            <Header />
            {props.children}
        </div>
    );
}