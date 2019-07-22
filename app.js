const github = new GitHub;

const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                //Alert here
            } else {
                //Show Profile
            }
        });
    } else {
        // Clear profile
    }
});