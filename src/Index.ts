import './index.scss';

import * as React from 'react';
import * as ReactDom from "react-dom";

import ExampleViewer from './example_viewer/ExampleViewer';

class Main
{
    constructor()
    {
        this.render();
    }

    private render(): void
    {

        ReactDom.render(
            React.createElement(ExampleViewer),
            document.getElementById('react-container')
        );
        
    }
}
let main = new Main();