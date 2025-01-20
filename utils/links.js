

export const navLinks = [
    {
        id: 1,
        title: 'home',
        path: '/'
    },
    {
        id: 2,
        title: 'products',
        path: '/products'
    },
    {
        id: 4,
        title: 'categories',
        childs: [
            {
                id: 1,
                title: 'electronics'
            },
            {
                id: 2,
                title: 'Clothing'
            },
            {
                id: 3,
                title: 'Kitchen'
            },
            {
                id: 4,
                title: 'Books'
            },
            {
                id: 5,
                title: 'sports'
            },
        ]
    },
    {
        id: 3,
        title: 'deals',
        path: '/deals'
    },
]