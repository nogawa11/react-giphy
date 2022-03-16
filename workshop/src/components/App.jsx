import React, { useState } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [selectedID, setSelectedID] = useState("13HgwGsXF0aiGY");
  const [gifIDs, setGifIDs] = useState(["6FxJBpNTBgWdJCXKD4", "9KCPkAcRqU9j2", "35DmVHlLURCWBxmK8j", "xTiN0E0uIjaG0kbvO0"]);
  // const selectedID = "13HgwsGsXF0aiGY";
  // const gifIDs = ["6FxJBpNTBgWdJCXKD4", "9KCPkAcRqU9j2", "35DmVHlLURCWBxmK8j"];

  const changeGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifs = res.data.map((gif) => gif.id);
      setGifIDs(gifs);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifs={changeGifs} />
        <div className="selected-gif">
          <Gif gifID={selectedID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifIDs} setSelectedID={setSelectedID} />
      </div>
    </div>
  );
};

export default App;
