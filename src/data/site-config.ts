import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://chaeri.net',
    avatar: {
        src: avatar,
        alt: 'Chaeri Jung'
    },
    title: 'Chaeri Jung',
    subtitle: 'Division of Artificial Intelligence Engineering, <a href="https://www.sookmyung.ac.kr" target="_blank" class="text-[#0072ce] underline decoration-dashed underline-offset-4 hover:decoration-solid hover:decoration-2">Sookmyung Women\'s University</a>',
    description: 'Personal blog and portfolio of Chaeri Jung',
    image: {
        src: hero,
        alt: 'OG Image'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Dashboard',
            href: '/dashboard'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/jchaerry'
        },
        {
            text: 'Scholar',
            href: 'https://scholar.google.com/citations?user=KEQFoAMAAAAJ&hl'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/chaeri-jung-84708937a'
        }
    ],
    hero: {
        title: 'Welcome to My Corner of the Web!',
        text: "Hi, I'm **Chaeri Jung**, majoring in <span class=\"text-[#0072ce] font-semibold\">Artificial Intelligence and Big Data</span> at <span class=\"text-[#0072ce] font-semibold\">Sookmyung Women's University</span> and an undergraduate research intern at <a href=\"https://snsec.net\" target=\"_blank\" class=\"text-[#0072ce] font-bold underline decoration-solid underline-offset-4 hover:decoration-2\">SNSec Lab</a>. I focus on <span class=\"text-[#0072ce] font-semibold\">Deep Learning</span> and <span class=\"text-[#0072ce] font-semibold\">Self-Supervised Learning</span>, specifically applied to Anomaly Detection and Data-driven Security. I am constantly learning and building projects to solve real-world problems through data-driven approaches. \n\nFeel free to explore some of my coding endeavors on <a href=\"https://github.com/jchaerry\" target=\"_blank\" class=\"text-[#0072ce] font-bold underline decoration-solid underline-offset-4 hover:decoration-2\">GitHub</a>.",
        image: {
            src: hero,
            alt: 'chaeri\'s travel photo taken in Germany'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     enabled: true,
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     form: {
    //         action: '#'
    //     }
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
