const podcastsData = [
    {
        id: '1',
        thumb:'https://ogk6d53gtg-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/Sam-Harris-%E2%80%93-samharris.org_.png',
        title: 'Waking Up with Sam Harris #127 - Freedom from the Known (with Michael Pollan)',
        videoUrl: 'https://www.youtube.com/embed/qpu7oeYhVFA',
        shortDescription: 'Lorem Ipsum',
        description: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.`,
        date: '21.12.2018',
        author: 'me'
    },
    {
        id: '2',
        thumb:'https://ogk6d53gtg-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/Sam-Harris-%E2%80%93-samharris.org_.png',
        title: 'Waking Up with Sam Harris #126 - In Defense of Honor (with Tamler Sommers)',
        videoUrl: 'https://www.youtube.com/embed/kI4TXBomGSw',
        shortDescription: 'Lorem Ipsum',
        description: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.`,
        date: '22.12.2018',
        author: 'me'
    },
    {
        id: '3',
        thumb:'https://ogk6d53gtg-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/Sam-Harris-%E2%80%93-samharris.org_.png',
        title: 'Waking Up with Sam Harris #116 - AI: Racing Toward the Brink (with Eliezer Yudkowsky)',
        videoUrl: 'https://www.youtube.com/embed/AaNLX71Hl88',
        shortDescription: 'Lorem Ipsum',
        description: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.`,
        date: '23.12.2018',
        author: 'me'
    }
]

const podcastImages = podcastsData.map(p => {
    return {
            image: p.thumb, 
            title: p.title,
            alt: p.title
            }
})

export {podcastsData, podcastImages}