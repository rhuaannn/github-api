export const searchApi = async (username) => {
    const url = `https://api.github.com/users/${username}`;
  
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        mode: "cors",
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return null;
    }
  };

  export const searchRepos = async (username) => {
    const urlRepos = `https://api.github.com/users/${username}/repos `

    try {
      const res = await fetch(urlRepos, {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        mode: "cors",
      });
      if (!res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
      const repoNames = data.map(repo => repo.name);
      return repoNames;
      
    } catch (error) {
      return null;
    }

  }
  
  export default {
    searchApi,
    searchRepos
};  