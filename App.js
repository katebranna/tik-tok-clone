import React, {useState, useEffect} from 'react';
import './App.css';
import db from './firebase';
import Video from './Video.js';

function App() {
  //to extract Tiktok videos from the database
  const [videos, setVideos] = useState([]);

  //access the database, fire once when the component loads and when [videos] changes 
  //useEffect(() => {
  //  db.collection('videos').onSnapshot(snapshot => (
  //    setVideos(snapshot.docs.map(doc => doc.data()))
  //  ))
  //}, [])

  return (
    <div className="app">
      <div className="app__videos">

        {/*How to extract from the database for each video component
      {videos.map(({url, channel, description, song, likes, messages, shares}) => (
        <Video 
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
        />
      ))}
      */}

      <Video 
        url="https://v77.tiktokcdn.com/f2902faba2029b5208850923cd67cb26/5f6165dd/video/tos/useast2a/tos-useast2a-ve-0068c004/1490616c5f0a427ca2ccab64ee62b28c/?a=1233&br=5116&bt=2558&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009151909340101901871633509CEAB&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzh0dnU1bXR1dDMzOTczM0ApOjo0ODtoOztkNzY1Zzw2OmdxNmVrcGBwZmJfLS0vMTZzcy4yXi0zNS0xM141LV4vLjM6Yw%3D%3D&vl=&vr="
        channel="jordantrichards"
        description="Top 5 Washington hikes pt. 2 #washingtoncheck #washington #seattle #fyp #hiking #outdoors #pnw #explore #hike #views #mountain #foryoupage #wa"
        song="Problems - ARIZONA"
        likes={41500}
        messages={264}
        shares={111}
        />
        <Video 
        url="https://v77.tiktokcdn.com/fd25165fe0a5f98799cd684b8abd4b4b/5f616678/video/tos/useast2a/tos-useast2a-ve-0068c004/f7fe9564590a491e94d374878160ba35/?a=1233&br=2936&bt=1468&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009151912100101891941630809E7B0&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzxvazNrZjo6djMzZjczM0ApNDY8Zzw0NztnN2RlOWQ7aWcvMV8yXzZmal5fLS1hMTZzc14uMWEzLi5fMC9hLTQuL2I6Yw%3D%3D&vl=&vr="
        channel="emitoms"
        description="Sunset at sunrise in Mt. Rainier National Park 😍🏔 #washingtoncheck #washington #washingtonstate #sunset #fyp #seattle"
        song="Can We Kiss Forever? - Kina"
        likes={2105}
        messages={34}
        shares={60}
        />
        <Video 
        url="https://v77.tiktokcdn.com/7b156121b564219c46a89a72fe4af218/5f6162d0/video/tos/useast2a/tos-useast2a-ve-0068c002/5b8fbcd8cf3c49f0ad00d3809fd60f98/?a=1233&br=2704&bt=1352&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009151856280101890651354F095A96&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2h5ajx0bGhmdjMzMzczM0ApPGk6aWY4ZGVnNzNnMzU1N2dxM2FsLS00Ym9fLS0zMTZzcy4uNDI2NDY2YTU0Mi1hLTY6Yw%3D%3D&vl=&vr="
        channel="earthyandy"
        description="ACAI BOWL kinda day! Rainbow bowls found here: 🌈 http://coconutbowls.com/aloha-bundle #recipe #fy #fyp #healthy #acai #smoothiebowl #health #fitness"
        song="original sound - earthyandy"
        likes={2023}
        messages={23}
        shares={11}
        />
      </div>
    </div>
  );
}

export default App;
