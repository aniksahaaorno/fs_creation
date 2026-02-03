import p1 from '../assets/portfolio_1.png';
import p2 from '../assets/portfolio_2.png';

// Add your projects here.
// You can copy the object structure to add new items.
// Ensure you import the image at the top.

export const projects = [
    {
        id: 1,
        title: 'Neon Dreams',
        category: 'Character Animation',
        img: p1,
        client: 'CyberCorp'
    },
    {
        id: 2,
        title: 'Data Flow',
        category: 'Explainer',
        img: p2,
        client: 'TechSystems'
    },
    {
        id: 3,
        title: 'Eco Life',
        category: 'Educational',
        img: p1,
        client: 'GreenEarth'
    },
    {
        id: 4,
        title: 'Future City',
        category: 'Motion Graphics',
        img: p2,
        client: 'UrbanAI'
    }
];

export const categories = ['All', 'Character Animation', 'Explainer', 'Educational', 'Motion Graphics'];
