import { Parallax } from 'react-parallax';

const ContainerMenu = () => (
    <Parallax className='IMAGE-1-menu'  bgImage='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  strength={100}>
        <div className='content-menu'>
            <span className='img-text-menu'>OuR menu</span>
        </div>
    </Parallax>
);
export default ContainerMenu