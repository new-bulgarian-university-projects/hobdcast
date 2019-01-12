const imageProps = require('../utils/constants').imageProps;

console.log(process.env)
const articlesData = [
    {
        id: 1,
        title: 'Cycling',
        image: {
            src: '/images/cycling.jpg',
            alt: 'cycling',
            width: imageProps.width,
            height: imageProps.height
        },
        description: 'Description',
        text: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.`,
        createdOn: new Date().toUTCString(),
        author: 'unknown',
        tags: ['cycling', 'sport']
    },
    {
        id: 2,
        title: 'Tennis',
        image: {
            src: '/images/tennis.jpg',
            alt: 'tennis',
            width: imageProps.width,
            height: imageProps.height
        },
        description: 'Description',
        text: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.`,
        createdOn: new Date().toUTCString(),
        author: 'unknown',
        tags: ['tennis', 'sport', 'popular']
    },
    {
        id: 3,
        title: 'Chess',
        image: {
            src: '/images/chess.jpeg',
            alt: 'cycling',
            width: imageProps.width,
            height: imageProps.height
        },
        description: 'Description',
        text: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.`,
        createdOn: new Date().toUTCString(),
        author: 'unknown',
        tags: ['chess', 'sport', 'popular']
    }
]

const articleImages = articlesData.map(a => {
                                        return {
                                            title: a.title,
                                            text: a.text,
                                            url: a.image.src
                                        }});

module.exports = 
{
    articlesData, 
    articleImages
}