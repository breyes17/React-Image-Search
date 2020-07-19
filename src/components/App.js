import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (e) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: e,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 15 }}>
        <SearchBar onSearch={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <small>Version 1.0</small>
      </div>
    );
  }
}

export default App;
