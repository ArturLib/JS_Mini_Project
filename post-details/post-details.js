let postId = new URL(location.href).searchParams.get('postsId');

let gettingPostInfo = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let post = await response.json();
    let postDivEl = document.createElement('div');

    postDivEl.innerText =
        `
        TITLE - ${post.title};
        BODY - ${post.body};
        `

    document.body.append(postDivEl);

    await getPostComments();
}
void gettingPostInfo();

let getPostComments = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    let comments = await response.json();
    let wrapper = document.createElement('div');

    for (const comment of comments) {
        let commentDivEl = document.createElement('div');
        commentDivEl.innerText =
            `
            ID - ${comment.id};
            NAME - ${comment.name};
            EMAIL - ${comment.email};
            BODY - ${comment.body};
            `

        wrapper.appendChild(commentDivEl);
    }
    document.body.appendChild(wrapper);
}