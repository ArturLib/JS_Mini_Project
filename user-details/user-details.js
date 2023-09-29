let userId = new URL(location.href).searchParams.get('userId');

let gettingUserInfo = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let user = await response.json();
    let userInfoDiv = document.createElement('div');

    userInfoDiv.innerText =
        `
        ID - ${user.id}
        NAME - ${user.name}
        USER NAME - ${user.username}
        EMAIL - ${user.email}
        PHONE - ${user.phone}
        WEBSITE - ${user.website}
        ADDRESS:
        city - ${user.address.city}
        street - ${user.address.street}
        suite - ${user.address.suite}
        zipcode - ${user.address.zipcode}
        GEO:
        latitude - ${user.address.geo.lat}
        longitude - ${user.address.geo.lng}
        COMPANY:
        ${user.company.bs} 
        ${user.company.catchPhrase}
        ${user.company.name}
        `

    let wrapper = document.createElement('div');
    wrapper.append(userInfoDiv);

    let postOfUser = document.createElement('button');
    postOfUser.innerText = 'post of current user';
    postOfUser.onclick = () => {
        gettingPosts();
    }

    document.body.append(wrapper, postOfUser);
}
void gettingUserInfo();

let gettingPosts = async () => {
    let response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    let posts = await response2.json();
    let postsDivEl = document.createElement('div');

    for (const post of posts) {
        let postDivEl = document.createElement('div');
        postDivEl.innerText = `title - ${post.title}`;

        let button = document.createElement('button');
        button.innerText = 'more info';
        button.onclick = () => {
            location.href = `../post-details/post-details.html?postsId=${post.id}`;
        }

        postsDivEl.append(postDivEl, button);

    }

    document.body.appendChild(postsDivEl);
}