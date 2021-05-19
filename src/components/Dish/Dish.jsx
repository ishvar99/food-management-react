import React from 'react'
import './Dish.css'
import {Card,Button} from 'react-bootstrap'
const Dish = ({dish}) => {
 console.log(dish);
 const {name,proteins,calories,fats,carbs,image}= dish;
 console.log(proteins,carbs,fats)
 return (
  <div className='mb-4'>
   <Card style={{ width: '18rem' }}>
  <Card.Img  variant="top" src={image}/>
  <Card.Body>
    <Card.Title className='text-center mb-3'><strong>{name}</strong></Card.Title>
    <Card.Text>
    <strong><span style={{color: '#17A2B8'}}>Proteins : {(proteins+fats+carbs)} g</span></strong> 
    <div className="progress mb-3">
    <div className="progress-bar bg-info" style={{width:`${(proteins/(proteins+fats+carbs))*100}%`}}>
    <i className="fas fa-dna"></i>
    </div>
    </div>
    {/* <br/> */}
    <strong><span style={{color: '#FFC107'}}>Carbs : {carbs} g</span></strong> 
    <div className="progress mb-3">
    <div className="progress-bar bg-warning" style={{width:`${(carbs/(proteins+fats+carbs))*100}%`}}>
    <i className="fas fa-bread-slice"></i>
    </div>
    </div>
    <strong><span style={{color: '#DC3545'}}>Fats : {fats} g</span></strong> 
    <div className="progress mb-3">
    <div className="progress-bar bg-danger" style={{width:`${(fats/(proteins+fats+carbs))*100}%`}}>
    <i className="fas fa-tint"></i>
    </div>
    </div>
      {/* Proteins : {proteins}
      <br/>
      Carbs: {carbs}
      <br/>
      Fats: {fats} */}
    </Card.Text>
    <div className='text-center mt-5'>
    <button type="button" className="btn btn-primary">
  <strong style={{fontSize:'18px'}}>Calories</strong><span style={{fontSize: "14px"}} className="badge badge-light p-2 ml-3"><strong>{calories} cal</strong></span>
</button>
    </div>
  </Card.Body>
</Card>
  </div>
 )
}

export default Dish
