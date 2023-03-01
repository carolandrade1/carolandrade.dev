export const info = {
  '/': {
    name: 'HomeDummy',
    photoUrl: '/profilePhoto.jpeg',
    photoAlt: 'Picture of Carol Andrade',
    introductionSection: {
      h1: 'Carol Andrade Santos',
      role: 'Front end developer ✨',
      description:
        'Hello 👋 I\'m Carol, a Front End Developer from Brazil 🇧🇷. Now I currently live in Canada 🇨🇦 and I\'m looking for my first job here.',
      contact: [
        {
          contactId: '01',
          name: 'Github',
          url: 'https://github.com/carolandrade1',
        },
        {
          contactId: '02',
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/carolandrade1/',
        },
        {
          contactId: '03',
          name: 'Codepen',
          url: 'https://codepen.io/carolandrade1',
        },
      ],
    },
    projectSection: {
      h2: 'Projects',
      description: 'Here you can see some of my projects that I did in the past.',
      gridProject: [
        {
          cardId: '01',
          title: 'Google Clone',
          description: 'Google clone using Next.js and Tailwind',
          link: 'https://google-clone-livid-zeta.vercel.app/pt-BR',
          linkCode: 'https://github.com/carolandrade1/GoogleClone',
          buttonText: 'See live',
        },
        {
          cardId: '02',
          title: 'Projects JavaScript',
          description: 'Multiple projects manipulating the DOM',
          link: 'https://carolandrade1.github.io/Javascript_Projects/',
          linkCode: 'https://github.com/carolandrade1/Javascript_Projects',
          buttonText: 'See live',
        },
        {
          cardId: '03',
          title: 'Responsive Layouts',
          description: '10 Modern CSS single-line styling',
          link: 'https://carolandrade1.github.io/Responsive_Layout/',
          linkCode: 'https://github.com/carolandrade1/Responsive_Layout',
          buttonText: 'See Live',
        },
      ],
    },
    librarySection: {
      h2: 'Reference Library',
      description: 'In this list, you will find many wonderful articles/videos that can help you deepen your knowledge and gain new insights on other topics. I used most of these links to create this portfolio, they served as a resource to seek more knowledge. And as they say, good things have to be shared 😄',
      tableRef: [
        {
          id: '01',
          title: 'Adding a dark/light mode toggle to Next.js using CSS variables',
          author: 'Rob Morieson',
          url: 'https://electricanimals.com/articles/next-js-dark-mode-toggle',
          subject: ['Next.js', 'Accessibility', 'Toggle Theme'],
        },
        {
          id: '02',
          title: 'Taillwind Docs',
          author: 'Taillwind',
          url: 'https://tailwindcss.com/docs/',
          subject: ['Tools'],
        },
        {
          id: '03',
          title: 'Thinking about accessibility—a few tips to make a difference',
          author: 'Aman Singh',
          url: 'https://amanexplains.com/thinking-about-accessibility-a-few-tips/',
          subject: ['Accessibility'],
        },
        {
          id: '04',
          title: 'How to create an accessible Tabs component in React?',
          author: 'Aman Singh',
          url: 'https://amanexplains.com/how-to-create-an-accessible-tabs-component-in-react/',
          subject: ['Accessibility'],
        },
        {
          id: '05',
          title: 'Supabase Docs',
          author: 'Supabase',
          url: 'https://supabase.com/docs/guides/database/api/generating-types',
          subject: ['Tools'],
        },
        {
          id: '06',
          title: 'Accessible Icon Buttons',
          author: 'Sara Soueidan',
          url: 'https://www.sarasoueidan.com/blog/accessible-icon-buttons/',
          subject: ['Accessibility'],
        },
        {
          id: '7',
          title: 'TypeScript Docs',
          author: 'TypeScript',
          url: 'https://www.typescriptlang.org/docs/handbook/enums.html',
          subject: ['Tools'],
        },
      ],
    },
  },
};
