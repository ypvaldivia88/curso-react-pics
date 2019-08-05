import React from 'react';

class SearchBar extends React.Component{
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <label>Image Search</label>
                    <input type="text" />
                </form>
            </div>
        );
    }
}

export default SearchBar;