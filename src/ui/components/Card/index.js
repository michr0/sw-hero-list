import React from 'react';

export default class Card extends React.PureComponent {
    render() {
        const {
            name,
            height,
            homeworld,
        } = this.props;
        return (
            <div className="card">
                <div className="card-title">
                    <h2>
                        {name.toUpperCase()}
                    </h2>
                </div>
                <div className="card-details">
                    <p>
                        <span className="italic">Height: </span>
                        <span className="bold">{height}</span>
                    </p>
                    <button className="card-details-button">
                        <a href={homeworld}>
                            Details
                        </a>
                    </button>
                </div>
            </div>
        );
    }
}
