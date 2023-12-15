import React, { useState, useEffect} from 'react';
import "./styles/interviewsStyles.css"

const createVideoProps = () => ({
  'data-video-id': 'ABC123',
  "src":"https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Robert%20Tamble%20Testimonial.mp4?alt=media&token=9ca5db27-5c48-4f4a-8a65-b6e01f271b99" ,
  'controls': true,
  // 'loop': true,
  'muted': true,
  'data-yes': true,
  'data-no': false,
});
const createVideoProps2 = () => ({
  'data-video-id': 'ABC123',
  "src":"https://firebasestorage.googleapis.com/v0/b/roundrock-fcf1c.appspot.com/o/Media%20Choice%20-%20Gino's%20V5.mp4?alt=media&token=4df00c36-9362-4dd9-98c7-6430743db48a" ,
  'controls': true,
  // 'loop': true,
  'muted': true,
  'data-yes': true,
  'data-no': false,
});

const Interviews = () => {
  const [videoProps, setVideoProps] = useState({});
  const [videoProps2, setVideoProps2] = useState({});

  useEffect(() => {
    setVideoProps(createVideoProps());
    setVideoProps2(createVideoProps2());
  }, []);

  return (
    <>
    <h1>Testimonials</h1>
      <video autoPlay="false" playsInline {...videoProps}/>
      <video autoPlay="false" playsInline {...videoProps2}/>
    </>
  );
};

export default Interviews;
