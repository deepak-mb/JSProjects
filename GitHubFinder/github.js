class Github {
    constructor() {
        this.client_id = 'f825e74c979ccab05b35';
        this.client_secret = '6e3f66a73ead0138fe724b387efad7d2a6427cd0';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        console.log(profileData);
        return {
            profile: profileData
        }
    }
}