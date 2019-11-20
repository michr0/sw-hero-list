import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Card from './ui/components/Card';
import Spinner from './ui/components/Spinner';

// Styles
import './assets/scss/styles.scss';

// Api
import Rest  from './api/rest';

class App extends React.Component {
    state = {
        people: null
    };

    render() {
        const {
            people
        } = this.state;
        return (
            <div className={'container'}>
                <h1>Starwars heros</h1>
                {people === null ? (
                    <div className="flex-wrapper">
                        <Spinner />
                    </div>
                ) : (
                    people.length === 0 ? (
                        <div className="flex-wrapper">
                            <h2>No data</h2>
                        </div>
                    ) : (
                        <div className="list-wrapper">
                            {people.map((person, index) => (
                                <Card key={index.toString()} {...person}/>
                            ))}
                        </div>
                    )
                )}
            </div>
        );
    }

    async componentDidMount() {
        const people  = await this.getData();
        this.setState({ people });
    }

    // Get Page Date via Rest API
    getData = async () => {
        const { results, errors } = await Rest.getDataFromTelliaApi();
        if (errors) {
            //TODO:
            //Notify user
        } else {
            return results;
        }
    };
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
