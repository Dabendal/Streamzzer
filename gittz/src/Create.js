import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";


export default function App() {
  return (
    <div className="App" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }} >
      <YoutubeEmbed embedId="BMWtLXDkv6Y" />
    </div>
  );
}

