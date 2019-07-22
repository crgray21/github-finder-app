const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                //Alert here
            } else {
                ui.showProfile(data.profile);
            }
        });
    } else {
        // Clear profile
    }
});