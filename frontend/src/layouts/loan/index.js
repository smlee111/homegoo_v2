import { Outlet } from 'react-router-dom';

// components
import Nav from '../../components/Nav';

export default function LoanLayout() {
    return (
        <>
            <Nav/>
            대출 레이아웃
            <Outlet />
        </>
    );
}