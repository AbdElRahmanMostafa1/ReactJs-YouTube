import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/App components/Header';
import Video from './components/App components/Video';
import Footer from './components/App components/Footer';

const App = () => {
  // Definig consts
  const BASEURL = 'https://www.googleapis.com/youtube/v3/search';
  const KEY = 'AIzaSyDjfve8M3Haw4z_z1u97rffvXzFF7Nd1og';

  // Using States
  const [renderedVideosDetails, setRenderedVideosDetails] = useState([]);

  // Get Info
  const SearchedText = async (text) => {
    const responce = await axios.get(BASEURL, {
      params: {
        part: 'snippet',
        maxResults: 15,
        // order: 'date',
        q: text,
        key: KEY,
      }
    })
    setRenderedVideosDetails(responce.data.items);
    console.log(responce.data.items);
  }

  return (
    <main className='main'>
      <Header searchedText={SearchedText} />
      <Video renderedVideos={renderedVideosDetails} />
      <Footer />
    </main>
  )
}

export default App
