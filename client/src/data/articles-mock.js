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
        description: 'Cycling is a cool and refreshing activity.',
        text: `On a warm and sunny day what is the best way to hang out with friends?
        Probably something that will give a good time and at the same way will give
        you physical activity. Thats right! Cycling works for both. Also you save the nature
        if you are cycling instead of driving car or using the public transport. `,
        createdOn: new Date().toUTCString(),
        author: 'Ibrahim',
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
        description: 'Tennis is my favorite sport.',
        text: `Many people say that they love sport but they dont. I am here to say that
        I am huge sports fan. My favorite sport is tennis because it brings a lot very fundamental
        aspects to the field. The first thing that comes to my head is that it requires you to be fast.
        Noone will wait for you to respond to their shot. Probably that the reason why I love this sport that
        much. It's fast pace, you have to have a good precision, you should know what you are doing. The thing
        is that..if you know what you are doing, a newbie can't beat you by luck. I just love tennis leave me alone.`,
        createdOn: new Date().toUTCString(),
        author: 'Stoyan',
        tags: ['tennis', 'sport', 'popular']
    },
    {
        id: 3,
        title: 'Mind games',
        image: {
            src: '/images/chess.jpeg',
            alt: 'cycling',
            width: imageProps.width,
            height: imageProps.height
        },
        description: 'Chess is the way to go!',
        text: `Chess is really underestimated sport and a lot of people are ignorant about it. The truth is that
        every strategy game comes in a way from chess. Playing chess can develop you thinking so much. For example
        people in the past were building strategies for their battles with the help of chess. The thing is that the 
        is a practical element in it even today. Many people are ignoring it but in my opinion more kids should play chess
        so that our future can be more brighter.`,
        createdOn: new Date().toUTCString(),
        author: 'Jon',
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