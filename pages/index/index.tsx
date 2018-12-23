import React from 'react';
import Page from '../../components/page/index';
import Team from './team/index';
import Row1 from './row1/index';
import Row2 from './row2/index';
import Row3 from './row3/index';
import Title from './title/index';

const slides = [
  {
    id: 0,
    link: '/about',
    image: '/static/landing/image1.png',
    title: 'Awesome design. Great code. Crazy team.',
    text:
      "We have the experience, team and process to bring ideas from concept to launch and beyond. Since our founding in 2009, we've launched over 25 new products.",
  },
  {
    id: 1,
    link: '/about',
    title: 'Development',
    text: 'Check out the timeline and be happy, dude.',
  },
  {
    id: 2,
    image: '/static/landing/image2.jpg',
    link: '/about',
    title: 'Design',
    text: 'Check out the timeline and be happy, dude.',
  },
  {
    id: 3,
    image: '/static/landing/image3.jpg',
    link: '/about',
    title: 'Work',
    text: 'Check out the timeline and be happy, dude.',
  },
  {
    id: 4,
    image: '/static/landing/image4.png',
    link: '/about',
  },
  {
    id: 5,
    link: '/about',
    title: 'Tatiana Simakova',
    text: 'Imagine if the new iPhone 5S was released a long time ago in a galaxy far far away...',
  },
  {
    id: 6,
    image: '/static/landing/image5.jpg',
    link: '/about',
  },
  {
    id: 7,
    image: '/static/landing/image6.jpg',
    link: '/about',
    number: '#11',
    title: 'Daria Biryukova',
    text: 'Imagine if the new iPhone 5S was released a long time ago in a galaxy far far away...',
  },
  {
    id: 8,
    image: '/static/landing/image7.jpg',
    link: '/about',
    invert: true,
    title: 'JetBrains two-days festival',
    text: 'Imagine if the new iPhone 5S was released a long time ago in a galaxy far far away...',
  },
  {
    id: 9,
    link: '/about',
    title: 'JetBrains conference',
    text: 'Imagine if the new iPhone 5S was released a long time ago in a galaxy far far away...',
  },
  {
    id: 10,
    image: '/static/landing/image8.jpg',
    link: '/about',
  },
  {
    id: 11,
    image: '/static/landing/image10.png',
    link: '/about',
  },
  {
    id: 12,
    image: '/static/landing/image11.png',
    link: '/about',
  },
  {
    id: 13,
    link: '/about',
    title: 'Basiliq interface',
    text: 'Imagine if the new iPhone 5S was released a long time ago in a galaxy far far away...',
  },
  {
    id: 14,
    image: '/static/landing/image12.jpg',
    link: '/about',
  },
  {
    id: 15,
    image: '/static/landing/image13.jpg',
    link: '/about',
    title: 'House Account',
    text: 'Imagine if the new iPhone 5S was released a long time ago in a galaxy far far away...',
  },
];

const Index = () => (
  <Page>
    <Team />
    <Row1 slides={[slides[0], slides[1], slides[2], slides[3]]} />
    <Title title="Meetings" modification="meeting" />
    <Row2 slides={[slides[4], slides[5], slides[6], slides[7]]} />
    <Title title="Events" modification="events" />
    <Row3 slides={[slides[8], slides[9], slides[10], slides[11]]} />
    <Title title="Projects" modification="projects" />
    <Row2 slides={[slides[12], slides[13], slides[14], slides[15]]} />
  </Page>
);

export default Index;
