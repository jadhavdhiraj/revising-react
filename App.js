import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () =>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img src="https://cdn.dribbble.com/userupload/9903003/file/original-8eae5aec60527b67b7678e42aa2d8645.jpg?resize=200x100"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    )
}
    
const AppLayout = () =>{
    return(<div className='app'>
        <Header/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)