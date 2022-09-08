import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>&lt;/body&gt;</span>
                <br />

                <span className='bottom-tag-html'>&lt;/body&gt;</span>
            </div>
        </div>
    )
}

export default Layout;