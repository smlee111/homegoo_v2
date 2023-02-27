import { Outlet } from 'react-router-dom';

// components
import Nav from '../../components/Nav';

export default function MapLayout() {
    return (
        <>
            <Nav/>
            맵 레이아웃
            <Outlet />
        </>
    );
}