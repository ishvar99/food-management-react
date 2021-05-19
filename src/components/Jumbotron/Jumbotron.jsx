import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'
import './Jumbotron.css'
const Jumbotron = () => {
 return (
  <div className="jumbotron jumbotron-billboard">
 
  <div className="img"></div>
  <div className='d-flex justify-content-end' style={{position:'relative',zIndex:'1'}}>
    <Link to="/admin" className='btn btn-outline-light admin'>Admin Panel</Link>
    </div>
    <div className="container">
    
        <div className="row">
            <div className="col-lg-12 mt-5">
            <h1 className='text-center mb-5' style={{color:'#ADFF2F',fontSize:'48px'}}>EvolvFit</h1>
              
              <SearchBar/>
            </div>
        </div>
    </div>
</div>
 )
}

export default Jumbotron
