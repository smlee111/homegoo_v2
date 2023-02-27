import { Outlet } from 'react-router-dom';

// components
import Nav from '../../components/Nav';

export default function DuesLayout() {
    return (
        <>
            <Nav/>
            공과금 레이아웃
            <Outlet />
        </>
    );
}