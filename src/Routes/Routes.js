import { Route, Switch } from "react-router";
import HomePage from "../Home/HomePage";
import RegisterForm from "../Forms/RegisterForm";
import AdminPage from "../Admin/AdminPage";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/users/register">
                <RegisterForm/>
            </Route>
            <Route expact path="/admin">
                <AdminPage/>
            </Route>
        </Switch>
    )
}

export default Routes;