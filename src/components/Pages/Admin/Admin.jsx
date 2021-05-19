import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Table,Button} from 'react-bootstrap'
import DishModal from '../../DishModal/DishModal'
import {deleteDish,setDishes} from '../../../redux/actions/dishActions'
import Snackbar from '../../Snackbar/Snackbar'
import NavBar from '../../NavBar/NavBar'
const Admin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dishes)
  const [modalShow, setModalShow] = useState(false);
  const [showSnackbar,setShowSnackbar]=useState(false);
  const [data, setData] = useState();
  // useEffect(() => {
  //   dispatch(setDishes())
  //  }, [])
  const removeDish =(id)=>{
    dispatch(deleteDish(id))
    setShowSnackbar(true);
    setTimeout(()=>{
     setShowSnackbar(false)
    },3000)

  }
  return (
    <>
    <NavBar btn={'Go Back'}/>
    <h1 className='text-center mt-5' style={{color : 'darkblue'}}>Admin Panel</h1>
    <Snackbar message={"Dish deleted successfully!"} show={showSnackbar}/>
    <DishModal
    data={data}
        show={modalShow}
        onHide={() =>{
          setModalShow(false)
          setData()
          }}
      />
    <div className='d-flex align-items-center justify-content-between flex-column mt-5' style={{height:'250px'}}>
    <div className="align-self-center" style={{width:'75%'}}>
    <Button  style={{display:state.dishes?.length>0?'':'none'}} onClick={() => setModalShow(true)} className='btn btn-primary mb-2'>Add Dish</Button>
    </div>
      {
    state.dishes&&
    state.dishes.length>0?
    <div style={{width:'75%'}} >
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Proteins</th>
      <th>Carbs</th>
      <th>Fats</th>
      <th>Calories</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {state.dishes.map(({id,name,proteins,carbs,fats,calories,image})=>{
   return <tr key={id}>
      <td>{id}</td>
      <td><img className="mt-2 mb-2" width="60px" height="60px" alt="error" src={image}/><div style={{fontWeight:500}}>{name}</div></td>
      <td>{proteins}</td>
      <td>{carbs}</td>
      <td>{fats}</td>
      <td>{calories}</td>
      <td><Button variant="success" onClick={
        ()=>{
          setData({id,name,proteins,carbs,fats,calories,image})
          setModalShow(true);
          }
        }>Edit</Button><span>&nbsp;&nbsp;</span><Button variant="danger" onClick={()=>removeDish(id)}>Delete</Button></td>
    </tr>
  })
  }
  </tbody>
</Table>
</div>
    :
    <div className='d-flex justify-content-end flex-column align-items-center' style={{height:"100%"}}>
    <h2 className='mb-3'>No dishes to display!</h2>
    <div className='text-center'>
    <Button onClick={() => setModalShow(true)} className='btn btn-primary mb-5'>Add Dish</Button>
    </div>
    </div>
   }
    </div>
    </>
  )

}

export default Admin
