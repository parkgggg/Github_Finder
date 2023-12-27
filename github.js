class Github {
  constructor() {
    this.client_id = "6ba2d6ec232f72e1f9c8";
    this.client_secret = "77c3d8661397ef31d4fa089ab28f87ca82e64457";
    this.repo_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {profile, repos};
  }

}

