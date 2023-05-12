import React from "react";
import { HashRouter , Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../containers/Layout';
import '../styles/global.css'

const App = () => { return (

<HashRouter >
<Layout>
<Routes>
        <Route path="/" element={<Home/>}/>    
</Routes>
</Layout>
</HashRouter >
);
}

export default App;