import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 'insights',
    insights: [
      { title: 'Worldometer', logo: 'worldometer-logo-url' },
      { title: 'Science Daily', logo: 'sciencedaily-logo-url' },
      
    ],
    articles: [
      { id: 1, title: 'Sustainability in Automotive', time: '27 mins ago', reads: 21, image: 'article1-image-url' },
      //{ id: 2, title: 'TCS UK Sustainability Competition', time: '3 days ago', reads: 19, image: 'article2-image-url' },
    ],
  };
const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
      setActiveTab: (state, action) => {
        state.activeTab = action.payload;
      },
      incrementReadCount: (state, action) => {
        const article = state.articles.find(article => article.id === action.payload);
        if (article) {
          article.reads += 1;
        }
      }
    },
  });
  
  export const { setActiveTab, incrementReadCount } = newsSlice.actions;
  export default newsSlice.reducer;
  