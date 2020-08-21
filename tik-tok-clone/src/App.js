import React from 'react';
import './App.css';

// Components
import Video from './components/Video'

function App() {
  return (
    // BEM
    <div className="app">
        <div className="app__videos">
          <Video
            url="https://v16m.tiktokcdn.com/a717d72978f8a49475d79659381553f4/5f42cc32/video/tos/useast2a/tos-useast2a-pve-0068/8eef09854d3a4aa383741e44b0c49838/?a=1233&br=2812&bt=1406&cr=0&cs=0&dr=0&ds=3&er=&l=202008212006100101890651374742F4DC&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M287aXdnMzx2djMzaTczM0ApOmg5aTo1NGVlNzg5aWRkNWdrai8yaGZgMGxfLS1hMTZzcy8zMmJgYjFjYjUtLzE2MGA6Yw%3D%3D&vl=&vr="
            channel="hegaan"
            description="WOW this work"
            song="La bomba - Ricky Martin"
            likes={123}
            messages={400}
            shares={200}
          />
          <Video />
          <Video />
        </div>
    </div>
  );
}

export default App;
