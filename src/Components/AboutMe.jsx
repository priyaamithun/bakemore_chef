import React from 'react';
import {Link} from 'react-router-dom';

const AboutMe = () =>(
<div className="about">
<div className="intro-content">
<h3>
    About me...
</h3>
<h5>
I'm Rashmi, a cheerful person loves baking, cooking and designing.<br/> <br/>

I live in Austin, 
Texas with my husband and son. <br/>

I have a passion of baking amazing stuffs.<br/>
My other interest includes painting,arts and crafts.
</h5>
</div>
<Link  to="/" className="GoBack"><a href="#">Go Home</a></Link>
</div>

);
export default AboutMe;