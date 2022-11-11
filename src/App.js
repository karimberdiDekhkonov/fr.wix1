import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">       
      <div className="App">
        <header>
        <div className="left">
          K.Griffith
        </div>
        <div className="right">
          <ul>
            <li><a href="#"> APPEARANCES</a></li>
            <li><a href="#">BOOKS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        </header>
        <div className="line"></div>
        <main>
        <section className="first">
          <div className="top">
            <div className="left">
              <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt="women" />
            </div>
            <div className="right">
              <div className="name">Kayla Griffith</div>
              <div className="des">Award Winning Author</div>
            </div>
          </div>
        </section>
        </main>
      </div>
      <div className="second">
        <div className="content">
          <div className="left">
            <div className="box1">New Release</div>
            <div className="box2">The Swan Isle (2023)</div>
            <div className="box3">I'm a pargaraph. Click here to add your own text and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.</div>
            <div className="box4">Order now</div>
            <div className="box5">
              <button className="amazon">Amazon</button>
              <button className="google">Google</button>
              <button className="ibooks">ibooks</button>
            </div>
          </div>
          <div className="right">
            <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt="book" />
          </div>
        </div>
      </div>
      <div className="third">
        <div className="thirdUp">
        Praise & Reviews
        </div>
        <div className="thirdDown">
        <div className="third1">
            <div className="up">"</div>
            <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
            <div className="thiner">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</div>
            <div className="line"></div>
          </div>
          <div className="third1">
            <div className="up">"</div>
            <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
            <div className="thiner">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</div>
            <div className="line"></div>
          </div>
          <div className="third1">
            <div className="up">"</div>
            <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
            <div className="thiner">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="fourth">
        <div className="fourth-first">
          <div className="up">See Upcoming Apparearances</div>
          <div className="down">I'm a paragraph. Click here to add your own text and edit me. It's easy.</div>
        </div>
        <div className="fourth-second">
          <div className="up">January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</div>
          <button className="btn">Join</button>
        </div>
        <div className="fourth-second">
        <div className="up">January 31st 2023, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</div>
        <button className="btn">Join</button>
        </div>
        <div className="fourth-second">
        <div className="up">March 2nd 2023, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</div>
        <button className="btn">Join</button>
        </div>
        <div className="fourth-third">
          <img src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg" alt="" />
          <div className="up">About Kayla Griffith</div>
          <div className="middle">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
          <button className="btn">Read More</button>
        </div>
        
      </div>
      <footer>
      © 2023 by K.Griffith. Proudly created with Wix.com
      </footer>
    </div>
  );
}

export default App;
