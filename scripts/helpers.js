const getData =  async ({base_url,path}) =>{
    const response = await fetch(base_url + path);
            const data = await response.json();
            // console.log(data);
            return data;
};

export {getData};

