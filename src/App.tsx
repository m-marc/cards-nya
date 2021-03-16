import React, {useEffect, useState} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "./routes/Routes";
import {Header} from "./components/Header/Header";
import {useDispatch} from "react-redux";
import {thunkAuthMe} from "./redux/auth/thunks";
import {Loader} from "./components/Loader/Loader";

const App = () => {
    const dispatch: (action: any) => Promise<void> = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        dispatch(thunkAuthMe()).then(() => {setLoading(false)})
    }, [])
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                {loading ? <Loader position="center" /> : <Routes/>}
            </div>
        </HashRouter>
    );
}

export default App;
