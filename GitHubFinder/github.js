class Github {
    constructor() {
        this.client_id = 'f825e74c979ccab05b35';
        this.client_secret = '6e3f66a73ead0138fe724b387efad7d2a6427cd0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        const repoData = await repoResponse.json();
        // console.log(profileData);
        // console.log(repoData);
        return {
            profile: profileData,
            repos: repoData
        }
    }
} //Just fir git