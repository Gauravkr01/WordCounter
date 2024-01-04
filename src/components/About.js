import React, {useState}from 'react'

export default function About(){ 

  

  const [isClicked, setIsClicked] = useState(false);

  function darkmode() {
    setIsClicked(isClicked => !isClicked);
  }
  
    return (
       <div  style={isClicked ? ( {backgroundColor: 'black', color:'white'}) : ({backgroundColor:'white'})}> 



<div className="container ">
 <button className="container btn btn-primary" type="button" style={isClicked ? ( {backgroundColor: 'black', color:'white'}) : ({backgroundColor:'white', color:'black'})} onClick={darkmode}><b>Dark Mode</b></button>

</div>
 <h1>About: Story of <b>Marie Curie</b></h1>
 <p className='container'>
 From childhood she was remarkable for her prodigious memory, and at the age of 16 she won a gold medal on completion of her secondary education at the Russian lycée. Because her father, a teacher of mathematics and physics, lost his savings through bad investment, she had to take work as a teacher and, at the same time, took part clandestinely in the nationalist “free university,” reading in Polish to women workers. At the age of 18 she took a post as governess, where she suffered an unhappy love affair. From her earnings she was able to finance her sister Bronisława’s medical studies in Paris, with the understanding that Bronisława would in turn later help her to get an education.

 <h1> Move to Paris, Pierre Curie, and first Nobel Prize </h1>
Watch Alan Alda discussing the remarkable life of Marie Curie, who was the subject of his play Radiance: The Passion of Marie Curie
Watch Alan Alda discussing the remarkable life of Marie Curie, who was the subject of his play Radiance: The Passion of Marie Curie
Alan Alda discussing the work of Marie Curie, the subject of his 2011 play Radiance: The Passion of Marie Curie.
See all videos for this article
Marie Curie
Marie Curie
Marie Curie in her Paris laboratory.
Pierre Curie
Pierre Curie
Pierre Curie lecturing in a classroom.
In 1891 Skłodowska went to Paris and, now using the name Marie, began to follow the lectures of Paul Appell, Gabriel Lippmann, and Edmond Bouty at the Sorbonne. There she met physicists who were already well known—Jean Perrin, Charles Maurain, and Aimé Cotton. Skłodowska worked far into the night in her student-quarters garret and virtually lived on bread and butter and tea. She came first in the licence of physical sciences in 1893. She began to work in Lippmann’s research laboratory and in 1894 was placed second in the licence of mathematical sciences. It was in the spring of that year that she met Pierre Curie.
 </p>





       </div>
    );
}
