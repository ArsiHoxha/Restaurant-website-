import { Parallax } from 'react-parallax';

const Container3 = () => (
    <Parallax className='IMAGE-3'  bgImage='https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  strength={100}>
        <div className='content3'>
            <span className='img-text3'>Do You Want to Reserve a Table</span>
            <form action="https://formsubmit.co/arsihoxha23@gmail.com" method="POST">
    <div id="contacte-sec">
      <div class="contact-forms">
        <input id="emri" class="inputE" type="text" name="name" placeholder="Your Name" />
        <input id="email" class="inputM" type="email" name="email" placeholder="Your Email" />
        <textarea id="textarea" class="inputMESA" name="message" placeholder="Your Table Number"></textarea>
        <button type="submit" class="submit-button">Send</button>
      </div>
  </div>
</form>

        </div>
    </Parallax>
);
export default Container3