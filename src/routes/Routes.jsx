import Header from "../header/Header"
import User from "./user/User"
import Animals from "./anemals/Anemals"
import Fruits from "./fruits/Fruits"
import Cars from "./cars/Cars"

import { Route } from "react-router-dom"

const Routes = () => {
    return (
        <>

            <Header />

            <Route exact path="/">
                <User />
            </Route>

            <Route path="/Animals">
                <Animals />
            </Route>

            <Route path="/Fruits">
                <Fruits />
            </Route>


            <Route path="/Cars">
                <Cars />
            </Route>

        </>
    )
}

export default Routes