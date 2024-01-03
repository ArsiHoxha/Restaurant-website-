import './App.css';
import { Parallax } from 'react-parallax';
import Container from './components/ImageOne';
import Container2 from './components/ImageTwo';
import Container3 from './components/ImageThree';
import TextBox from './components/TextBox';
import TextBox2 from './components/TextBox2';

function App() {
  return (
    <div className="App">
      <div className='header'>
      <div><a href="http://localhost:3000/">HOME</a></div>
<div><a href="http://localhost:3000/about">ABOUT</a></div>
<div><a href="http://localhost:3000/menu">MENU</a></div>
      </div>
      <Container></Container>
      <TextBox></TextBox>
      <Container2></Container2>
      <TextBox2></TextBox2>

      <Container3></Container3>

    </div>
  );
}

export default App;
