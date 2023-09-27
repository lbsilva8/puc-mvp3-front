import axios from "axios";

const pixbay = axios.create({
    baseURL: 'https://pixabay.com/api/?key=39645183-2b23228cb779816b95239c164&q=',
});

export { pixbay };