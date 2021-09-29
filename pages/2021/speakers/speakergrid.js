import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../../components/Layout';
import theme from '../../../theme/theme';
import Header from '../../../components/Header';
import SpeakerGridItemComponent from './speakergriditem';
import Head from 'next/head';

export default function Speaker2021Component() {

  function popIt(e){
    console.log(e);
    var article = e.target;
    var popper =  ReactDOM.findDOMNode(article).getElementsByClassName('hover-pop');
    popper.className = popper.className + ' popped';
  }

  function stopIt(e){
    console.log(e);
    var article = e.target;
    var popper =  ReactDOM.findDOMNode(article).getElementsByClassName('hover-pop');
   // popper.className = 'hover-pop';
  }

  return (
    <Layout>
      <Head>
        <title>Speakers 2021</title>
      </Head>
      <Header
        title={'Speakers 2021'}
        banner="/static/banners/notable.jpg"
      />
      <section>
        <p tabIndex="0">
          Click on the images of our wonderful speakers to find out
          more about them and what they will be talking about.
        </p>
      </section>
      <section className="speaker-grid">
          <SpeakerGridItemComponent speakername="Tania Allard" pic="/static/speakers/2021/Tania_Allard.jpg" link="../tania-allard" talkbrief=" " />
      </section>
      <section className="speaker-grid">        
        <SpeakerGridItemComponent speakername="Lex Lofthouse" pic="/static/speakers/2021/Lex_Lofthouse.png" link="../lex-lofthouse" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Connell" pic="/static/speakers/2021/Connell_W.png" link="../connell-w" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Lucy Fletcher" pic="/static/speakers/2021/Lucy_Fletcher.png" link="../lucy-fletcher" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Simon Painter" pic="/static/speakers/2021/Simon_Painter.png" link="../simon-painter" talkbrief=" " />

        <SpeakerGridItemComponent speakername="Steve Collins" pic="/static/speakers/2021/steve_collins.jpg" link="../steve-collins" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Stephen Haunts" pic="/static/speakers/2021/Stephen_Haunts.jpg" link="../stephen-haunts" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Manu Magalhaes" pic="/static/speakers/2021/Manu_Magalhaes.png" link="../manu-magalhaes" talkbrief=" " />
        <SpeakerGridItemComponent speakername="James Croft" pic="/static/speakers/2021/James_Croft.png" link="../james-croft" talkbrief=" " />

        <SpeakerGridItemComponent speakername="Matt Whetton" pic="/static/speakers/2021/Matt_Whetton.png" link="../matt-whetton" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Ryan Yates" pic="/static/speakers/2021/Ryan_Yates.png" link="../ryan-yates" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Poornima Nayar" pic="/static/speakers/2021/Poornima_Nayar.png" link="../poornima-nayar" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Tom Morton" pic="/static/speakers/2021/Tom_Morton.png" link="../tom-morton" talkbrief=" " />

        <SpeakerGridItemComponent speakername="Kojo Hinson" pic="/static/speakers/2021/Kojo_Hinson.png" link="../kojo-hinson" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Stephen Jackson" pic="/static/speakers/2021/Stephen_Jackson.png" link="../stephen-jackson" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Rizwana Akmal Khan" pic="/static/speakers/2021/Rizwana_Akmal_Khan.png" link="../riz-akmal-khan" talkbrief=" " />
        <SpeakerGridItemComponent speakername="Leke Sholuade" pic="/static/speakers/2021/Leke_Sholuade.jpg" link="../leke-sholuade" talkbrief=" " />

        <SpeakerGridItemComponent speakername="Jennifer Mackown" pic="/static/speakers/2021/Jen_Mackown.png" link="../jennifer-mackown" talkbrief=" " />

    
     
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          .speaker-image {
            width: 175px;
            height: 175px;
            margin: 5px;
          }

          a .speaker-image:hover {
            filter: drop-shadow(5px 5px 5px rgb(26 125 135 / 0.75));
          }
          .speaker-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          .speaker-grid-item {
            min-width: 180px;
            height: 180px;
            overflow: hidden;
          }

          .hover-pop{
            width: 175px;
            background-color:pink;
            position: relative;
            top: -10px;
            margin-left: 5px;
          }

          .hover-pop.popped{
            top: -145px;
            padding:7px;
          }

        `}
      </style>
    </Layout>
  );
}
