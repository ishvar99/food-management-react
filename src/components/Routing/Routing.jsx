import React from "react"
import { Route, Switch } from "react-router-dom"
// import { useSelector, useDispatch } from "react-redux"
import Home from "../Pages/Home/Home"
import Admin from "../Pages/Admin/Admin"

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/admin" component={Admin}></Route>
    </Switch>
  )
}
export default Routing