import React from 'react'
import api from '../api/api'
import Row from '../components/Row/Row'


const NetflixShowPage = () => {
  return (
    <div>
        {/* <h1>Netflix Page</h1> */}
        {/* NavBar  */}
        {/* Bannner item  */}
        <Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={api.fetchingTending} />
        <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
        <Row title="Action Movies " fetchUrl={api.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={api.fetchDocumentaries} />
    </div>
  )
}

export default NetflixShowPage