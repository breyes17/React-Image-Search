import React from "react";

class SearchBar extends React.Component {
  state = {
    message: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.message);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ message: e.target.value })}
              value={this.state.message}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
