const blogPosts = [
    {
        title: 'Title1',
        author: 'Annie',
        publishDate: '01/01/2022',
        content: 'Insert Content Here 1'
    },
    {
        title: 'Title2',
        author: 'Annie',
        publishDate: '02/01/2022',
        content: 'Insert Content Here 2'
    },
    {
        title: 'Title3',
        author: 'Annie',
        publishDate: '03/01/2022',
        content: 'Insert Content Here 3'
    }
]

for (let i = 0; i < blogPosts.length; i++) {
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}


