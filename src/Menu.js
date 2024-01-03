import { Parallax } from 'react-parallax';
import './Menu.css'
import TextBoxMenu from './components/TextBoxMenu';
import ContainerMenu from './components/ImageOneMenu';
function Menu() {
  return (
    <div className="App">
      <div className='header'>
      <div><a href="http://localhost:3000/">HOME</a></div>
<div><a href="http://localhost:3000/about">ABOUT</a></div>
<div><a href="http://localhost:3000/menu">MENU</a></div>
      </div>
      <ContainerMenu></ContainerMenu>
        <TextBoxMenu></TextBoxMenu>
    </div>
  );
}

export default Menu;
