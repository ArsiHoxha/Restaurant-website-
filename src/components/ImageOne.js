import { Parallax } from 'react-parallax';

const Container = () => (
    <Parallax className='IMAGE-1'  bgImage='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  strength={100}>
        <div className='content'>
            <span className='img-text'>WELCOME TO OuR RESTORANT</span>
        </div>
    </Parallax>
);
export default Container