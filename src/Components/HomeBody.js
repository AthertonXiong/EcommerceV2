import React from 'react';
import '../SCSS/HomeBody.scss';
import i1 from '../ProductImg/diva.jpg';
import i2 from '../ProductImg/DragonQuest11.jpg';
import i3 from '../ProductImg/FFVlll.jpg';
import i4 from '../ProductImg/Kingdom.png';

function Body () {
    return (
        <div>
        <main class="grid-container">
        <div class="grid-item"> <img src={i1} class="product__img" alt="img" />
            <h3>Project Diva Mega Mix</h3>
            <h3>Price:</h3>
            <p>$39.99</p>
            <h3>Description:</h3>
            <p>Mix it up and choose from two playable modes: traditional button control-based Arcade Mode or the new motion control-based Mix Mode.</p>
        </div>
        <div class="grid-item"> <img src={i2} class="product__img" alt="img" />
            <h3>Dragon Quest XI S: Echoes of an Elusive Age Definitive Edition - Nintendo Switch</h3>
            <h3>Price:</h3>
            <p>$59.99</p>
            <h3>Description:</h3>
            <p>You are the luminary, the hunted hero who will protect the land from destruction in the latest RPG from the iconic Dragon quest series.</p>
        </div>
        <div class="grid-item"> <img src={i3} class="product__img" alt="img" />
            <h3>Final Fantasy VIII Remastered</h3>
            <h3>Price:</h3>
            <p>$19.99</p>
            <h3>Description:</h3>
            <p>Widely cherished, FINAL FANTASY VIII Remastered casts unlikely heroes into a war to save the world.</p>
        </div>
        <div class="grid-item"> <img src={i4} class="product__img" alt="img" />
            <h3>Kingdom Hearts 3</h3>
            <h3>Price:</h3>
            <p>$59.99</p>
            <h3>Description:</h3>
            <p>Kingdom Hearts III tells the story of the power of friendship and light vs. darkness as Sora and his friends embark on a perilous adventure.</p>
        </div>
    </main>
    </div>
    )
}

export default Body;