const podcastsData = [
    {
        id: '1',
        thumb:'https://i.ytimg.com/vi/qpu7oeYhVFA/maxresdefault.jpg',
        title: 'Waking Up with Sam Harris #127 - Freedom from the Known (with Michael Pollan)',
        videoUrl: 'https://www.youtube.com/embed/qpu7oeYhVFA',
        shortDescription: 'Michael Pollan about his new book How to Change Your Mind.',
        description: `Michael Pollan is the author of seven previous books, including Food Rules, 
        The Omnivore’s Dilemma and The Botany of Desire, Cooked, In Defense of Food
        all of which were bestsellers in New York Times. A longtime contributor to the New York Times Magazine, 
        he also teaches writing at Harvard and the University of California, Berkeley.`,
        date: '21.12.2018',
        author: 'Sam Harris'
    },
    {
        id: '2',
        thumb:'https://i.ytimg.com/vi/kI4TXBomGSw/maxresdefault.jpg',
        title: 'Waking Up with Sam Harris #126 - In Defense of Honor (with Tamler Sommers)',
        videoUrl: 'https://www.youtube.com/embed/kI4TXBomGSw',
        shortDescription: ' Tamler Sommers about cultures of honor.',
        description: `Tamler Sommers is an associate professor of philosophy at the University of Houston.
        He is the host of the podcast “Very Bad Wizards” and holds a PhD in philosophy from Duke University.
        He is the author of Why Honor Matters.`,
        date: '22.12.2018',
        author: 'Sam Harris'
    },
    {
        id: '3',
        thumb:'https://i.ytimg.com/vi/c4k1-DlInHA/maxresdefault.jpg',
        title: 'Waking Up with Sam Harris #116 - AI: Racing Toward the Brink (with Eliezer Yudkowsky)',
        videoUrl: 'https://www.youtube.com/embed/AaNLX71Hl88',
        shortDescription: 'Eliezer Yudkowsky about the nature of intelligence.',
        description: `Eliezer Yudkowsky is a decision theorist and computer scientist at the Machine Intelligence Research Institute in Berkeley, 
        California who is known for his work in technological forecasting. 
        His publications include the Cambridge Handbook of Artificial Intelligence chapter 
        “The Ethics of Artificial Intelligence,” co-authored with Nick Bostrom.`,
        date: '23.12.2018',
        author: 'Sam Harris' //TODO
    }
]

const podcastImages = podcastsData.map(p => {
    return {
            url: p.thumb, 
            title: p.title,
            alt: p.title
           }
})

module.exports =  {
    podcastsData, 
    podcastImages
}