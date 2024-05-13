import axios from "axios";

class CardService{
    getCardData(){
        return axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
    }
}
export default new CardService();