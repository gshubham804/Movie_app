import React, { Component } from 'react';
import { films } from './getmovies';
import movies from './movies';

export default class Favourite extends Component {
    constructor(){
        super();
        this.state={
            genres:[],
            currgen:'All Genres'
        }
    }
    render() {
        const movie = films.results;
        console.log(movie);
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
        
        let tempArr=[];
        movie.forEach((movieobj)=>{
            if(!tempArr.includes(genreids[movieobj.genre_ids[0]])){
                tempArr.push(genreids[movieobj.genre_ids[0]]);
            }
        })
        tempArr.unshift('All Genres');
        // this.setState({
        //     genres:[...tempArr]
        // })
        return <div>
            <>
                <div className='main'>
                    <div className='row'>
                        <div className='col-3'>
                            <ul class="list-group favourites-genres">
                                {
                                    tempArr.map((genre)=>(
                                        this.state.currgen==genre?
                                        <li class="list-group-item" style={{backgroundColor:'blue',color:'white',fontWeight:'bold'}}>{genre}</li>:
                                        <li class="list-group-item" style={{fontWeight:'bold'}}>{genre}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='col-9 favourites-table'>
                            <div className='row'>
                                <input type="text" className="input-group-text col" placeholder='Search movies' />
                                <input type="number" className="input-group-text col" placeholder='number of movies' />
                            </div>
                            <div className='row'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th> 
                                            <th scope="col">Genre</th>
                                            <th scope="col">Popularity</th>
                                            <th scope="col">Rating</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        movie.map((movieObj)=>(
                                        <tr>
                                            <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}  style={{width:'6rem'}}/>{movieObj.original_title}</td>
                                            <td>{genreids[movieObj.genre_ids[0]]}</td>
                                            <td>{movieObj.popularity}</td>
                                            <td>{movieObj.vote_average}</td>
                                            <td><button type="button" class="btn btn-danger">Danger</button></td>
                                        </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
                        </div>
                    </div>
                </div>
            </>
        </div>;
    }
}
