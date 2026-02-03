import p1 from '../assets/portfolio_1.png';
import p2 from '../assets/portfolio_2.png';
import ca1 from '../assets/portfolio/Character Animation 1.jpg';
import ca2 from '../assets/portfolio/Character Animation 2 .jpg';
import ed1 from '../assets/portfolio/educational_1.jpg';
import ed2 from '../assets/portfolio/educational_2.jpg';

export const projects = [
    {
        id: 1,
        title: 'Character Animation 1',
        category: 'Character Animation',
        img: ca1,
        client: 'FS Studio',
        link: 'https://youtu.be/MVPX66AY_xg'
    },
    {
        id: 2,
        title: 'Character Animation 2',
        category: 'Character Animation',
        img: ca2,
        client: 'FS Studio',
        link: 'https://youtu.be/MYheTQGo4OE'
    },
    {
        id: 3,
        title: 'Educational Series 1',
        category: 'Educational',
        img: ed1,
        client: 'FS Learning',
        link: 'https://youtu.be/j-bEY5IBC14'
    },
    {
        id: 4,
        title: 'Educational Series 2',
        category: 'Educational',
        img: ed2,
        client: 'FS Learning',
        link: 'https://youtu.be/PV507LLE5oU'
    },
    {
        id: 5,
        title: 'কার্টুন দেখে বড় হওয়া',
        category: 'Ads',
        img: p1,
        client: 'FS Creation',
        link: 'https://www.facebook.com/reel/1725121848158702'
    },
    {
        id: 6,
        title: 'Human to 2D Transformation',
        category: 'Ads',
        img: p2,
        client: 'FS Creation',
        link: 'https://www.facebook.com/reel/797689699947673'
    }
];

export const categories = ['All', 'Character Animation', 'Educational', 'Ads'];
