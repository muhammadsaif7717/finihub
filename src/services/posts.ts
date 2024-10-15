import axios from "axios";

export const loadedData = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return await data.data
}