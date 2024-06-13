import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'

export default function Main() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login type='select'/>} />
                    <Route path='/customer-login' element={<Login type='customer'/>} />
                    <Route path='/shop-keeper-login' element={<Login type='shop-keeper'/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}