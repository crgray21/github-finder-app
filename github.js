class GitHub {
    constructor () {
        this.client_id = 'dffa1ef161d324281522';
        this.client_secret = '93988d3d4decfddd6ccf04f9409dc9d0f540b0f1';
    }

    async getUser(user) {
        const profileResponse = await fetch(`
        https://api.github.com/users/${user}
        ?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json()
        return {
            profile: profile
        }
    }
}