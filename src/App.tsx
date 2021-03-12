import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "./routes/Routes";
import {Header} from "./components/Header/Header";
import {useDispatch} from "react-redux";
import {thunkAuthMe} from "./redux/auth/thunks";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(thunkAuthMe())
    }, [])
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Routes/>
            </div>
        </HashRouter>
    );
}

export default App;
