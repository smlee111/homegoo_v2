import { Outlet } from 'react-router-dom';

// components
import Nav from '../../components/Nav';

export default function CostLayout() {
    return (
        <>
            <Nav/>
            월주거비 레이아웃
            <Outlet />
        </>
    );
}