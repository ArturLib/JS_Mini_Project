let gettingUser = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();

    let wrapper = document.createElement('div');

    for (const user of users) {

        let userDiv = document.createElement('div');
        let button = document.createElement('button');

        userDiv.innerText = `${user.id} - ${user.name}`;
        button.innerText = 'user info';

        userDiv.appendChild(button);
        wrapper.appendChild(userDiv);

        button.onclick = () => {
            location.href = `../user-details/user-details.html?userId=${user.id}`;
        }
    }
    document.body.appendChild(wrapper);
}
void gettingUser();