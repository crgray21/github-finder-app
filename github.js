class GitHub {
    constructor () {
        this.client_id = 'dffa1ef161d324281522';
        this.client_secret = '93988d3d4decfddd6ccf04f9409dc9d0f540b0f1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`
        https://api.github.com/users/${user}
        ?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`
        https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
        &sort=${this.repos_sort}
        &client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        console.log(repoResponse);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }
}