import { render } from "@testing-library/react";
import React, {Component} from 'react';
import { renderIntoDocument } from "react-dom/test-utils";
import Header from "./Header";
import SCP from "./SCP";
import Footer from "./Footer";

class App extends Component
{
    render()
    {
        return(
            <div>
            <Header />
          <SCP scp={this.state.scp} />
            <Footer />
            </div>
        );
    }

    state = { scp: []}

    componentDidMount()
    {
        fetch('https://scpdb-f11b.restdb.io/rest/scp',
        {
            method: 'GET',
            headers:{
                "cache-control": "no-cache",
                "x-apikey": "	60def31fc60cf31676a22a1b",
                "content-type": "application/json"
            }
        })
        .then(result => result.json())
        .then((data) => {this.setState({scp: data})})
        .catch(console.log);
}
}

export default App;