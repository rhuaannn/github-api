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
      console.log(data)
      return data;
    } catch (error) {
      return null;
    }
  };
  
  export default searchApi;
  