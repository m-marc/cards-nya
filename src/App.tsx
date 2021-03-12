import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "./routes/Routes";
import {Header} from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {selectApp} from "./redux/Selectors";
import {thunkAuthMe} from "./redux/auth/thunks";
import {Loader} from "./components/Loader/Loader";

const App = () => {
    const {isLoading} = useSelector(selectApp)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(thunkAuthMe())
    }, [])
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                {isLoading ? <Loader position={"center"}/> : <Routes/>}
            </div>
        </HashRouter>
    );
}

export default App;
