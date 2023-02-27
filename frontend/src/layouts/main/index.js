import { Outlet } from 'react-router-dom';

// components
import Nav from '../../components/Nav';

export default function MainLayout() {
    return (
        <>
            <Nav/>
            메인 레이아웃
            <Outlet />
        </>
    );
}