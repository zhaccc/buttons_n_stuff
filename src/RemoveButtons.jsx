import React from 'react';

export default class RemoveButtons extends React.Component {
    render () {
        return (
            <button
                className="Remove-button"
                onClick={this.props.onClick} >
                Remove button!
            </button>
        )
    }
}

