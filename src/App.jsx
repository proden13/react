import {useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

// компоненты (кусочки кода, которые используются многократно)
import {Header, Footer} from "./components/General";
import Modal from "./components/Modal";
import Search from "./components/Search";

// страницы - отдельный компонент со своим набором компонентов
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("rockUser"));
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <Header 
                user={user} 
                setUser={setUser} 
                setModalActive={setModalActive}
            />
            <main>
                <Search arr={[]} upd={() => {}}/>
                {/* 
                    SPA - Single Page Application (одностраничное)
                */}
                
                <nav>
                    <Link to="/">Главная </Link>
                    <Link to="/catalog">Каталог </Link>
                    <Link to="/draft">Старый код</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/draft" element={<Draft/>}/>
                </Routes>
                
            </main>
            <Footer/>
            <Modal 
                active={modalActive} 
                setActive={setModalActive}
            />
        </>
    )
}

export default App;