const externalData = [
    {
      title: 'How to code      ',
          author: ' Annie'
    },
      {
      title: ' Why is Vim?',
          author: ' Annie'
    },
      {
      title: '  How to Hoola Hoop??      ',
          author: ' Annie'
    }
  ];

let fx10 = (arr) => {
    let fixed = []
    for (let i = 0; i < arr.length; i++){
	    arr[i].title = arr[i].title.trim();
        arr[i].author = arr[i].author.trim();
}
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i].title)
        console.log(arr[i].author)
    }
}

fx10(externalData);
