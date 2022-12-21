const Api_key ="c9d63dd440d0d8a49e8722261dbde47f";

const api={
    fetchingTending:`/trending/all/day?api_key=${Api_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${Api_key}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries:`discover/movie?api_key=${Api_key}&with_genres=99`,
};

export default api;