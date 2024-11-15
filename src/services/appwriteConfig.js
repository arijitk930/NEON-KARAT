import { Client, Account,  ID } from "appwrite";
import { apprwriteid,  apiKey, url } from "./config";

class Service {
    client = new Client();
    account;
    adminClient;

    constructor() {
        this.client.setEndpoint(url).setProject(apprwriteid);
        this.account = new Account(this.client);

    }

    async registerUser({ name, email, password }) {
        try {
            const user = await this.account.create(ID.unique(), email, password,name);
            if(user){
                return this.loginUser(email,password)
            }
            return null
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    }
    async loginUser(email,password){
        try {
            const user =await this.account.createEmailPasswordSession(email,password);
            if(user)
                return user
            else    
                return null
        } catch (error) {
            return null
        }
    }

}

const service = new Service();
export default service;
