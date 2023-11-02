import React, { useState, useEffect} from 'react';
import "./styles/interviewsStyles.css"

const createVideoProps = () => ({
  'data-video-id': 'ABC123',
  "src":"https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Robert%20Tamble%20Testimonial.mp4?alt=media&token=9ca5db27-5c48-4f4a-8a65-b6e01f271b99" ,
  'controls': true,
  'loop': true,
  'muted': true,
  'data-yes': true,
  'data-no': false,
});

const Interviews = () => {
  const [videoProps, setVideoProps] = useState({});

  useEffect(() => {
    setVideoProps(createVideoProps());
  }, []);

  return (
    <>
    <h1>Testimonial</h1>
      <video autoPlay="true" playsInline {...videoProps}/>
    </>
  );
};

export default Interviews;
