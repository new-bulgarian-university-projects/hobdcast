const homeData = {
    images:[{
        id: 1,
        title:'Full time hobby',
        alt: 'hobby image',
        src: 'https://f4.bcbits.com/img/0009799082_10.jpg'
    },
    {
        id: 2,
        title:'Hobby ideas',
        alt:'hobby ideas image',
        src: 'https://posts-cdn.kueez.com/Ch0a1YAjH0PAaeeM/image-UcxZqC5vxlkvGOqb.jpg'
    }]
}

const homeImages = homeData.images.map(i => {
    return {
            url: i.src, 
            title: i.title,
            alt: i.title
           }
})



module.exports =  {
    homeImages
}