import React,{useState,useEffect} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import {addDish} from '../../redux/actions/dishActions'
import {editDish} from '../../redux/actions/dishActions'
import Snackbar from '../Snackbar/Snackbar'
const DishModal = (props) => {
  const {data}=props;  
  console.log(data)
//  const dishes = useSelector((state) => state.dishes);
 const dispatch= useDispatch();
 const [name,setName]=useState('');
 const [image,setImage]=useState('')
 const [proteins, setProteins] = useState(-1);
 const [carbs, setCarbs]=useState(-1);
 const [fats,setFats]=useState(-1);
 const [show,setShow]=useState(false);
 const [msg, setMsg]=useState('')
 useEffect(() => {
   if(data)
   {
   setName(data.name)
   setProteins(data.proteins)
   setCarbs(data.carbs)
   setFats(data.fats)
   setImage(data.image)
   }
 }, [data])
 const handleSubmit= (event)=>{
  console.log(event)
  event.preventDefault();
  if( proteins===-1 || !carbs===-1 || !fats===-1 || name.trim()==='' || image.trim()===''){
    console.log(name)
    return;
  }
  if(!data){
    let dish= {
    name,proteins,carbs,fats,image
    }
  dispatch(addDish(dish))
  }
  else{
    let dish={
      id:data.id,name,proteins,carbs,fats,image
    }
  dispatch(editDish(dish))
  }
  props.onHide();
  setShow(true);
  setMsg(data?'Dish updated successfully!':'Dish added successfully!')
  setTimeout(()=>{
   setShow(false)
   setMsg('')
  },3000)
}
const clearState=()=>{
  console.log('clear state')
  setName('')
  setImage('')
  setProteins(-1)
  setCarbs(-1)
  setFats(-1)
  setShow(false)
  setMsg('')
}
 return (
  <>
  <Snackbar message={msg} show={show}/>
  <Modal
  {...props}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton onHide={clearState}>
    <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center">
      {data?"Edit a Dish":"Add a dish"}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <div className="container px-3">
   <Form onSubmit={handleSubmit}>
   <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control required type="text" value={data&&name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
  </Form.Group>
  <br/>
  <Form.Group>
    <Form.Label>Image Url</Form.Label>
    <Form.Control required type="text" value={data&&image} onChange={(e)=>setImage(e.target.value)} placeholder="Image Url" />
  </Form.Group>
  <br/>
  <Form.Group>
    <Form.Label>Proteins</Form.Label>
    <Form.Control required type="number" value={data&&proteins} onChange={(e)=>setProteins(parseInt(e.target.value))} placeholder="Protein (grams)" />
  </Form.Group>
  <br/>
  <Form.Group>
    <Form.Label>Carbs</Form.Label>
    <Form.Control required type="number" value={data&&carbs} placeholder="Carbs (grams)" onChange={(e)=>setCarbs(parseInt(e.target.value))}/>
  </Form.Group>
  <br/>
  <Form.Group>
    <Form.Label>Fats</Form.Label>
    <Form.Control required value={data&&fats} onChange={(e)=>setFats(parseInt(e.target.value))} type="number" placeholder="Fats (grams)" />
  </Form.Group>
  {/* <br/> */}
  <Button variant="primary" className="mb-2" type="submit">
    {data?"Update":"Add"}
  </Button>
</Form>
  </div>
  </Modal.Body>
</Modal>
</>
 )
}

export default DishModal
