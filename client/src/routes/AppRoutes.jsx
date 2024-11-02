import { Routes, Route } from 'react-router-dom'
import Projects from '../pages/Proyectos/Projects'
import Skills from '../pages/Skills/Skills'
import Contact from '../pages/contacto/contact'
import Home from '../pages/Home/Home'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contactos" element={<Contact />} />
            <Route path="*" element={<p>EL ERROR</p>} />
        </Routes>
    );
};

export default AppRoutes
