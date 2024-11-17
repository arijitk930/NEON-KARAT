import { Client, Account, ID, Databases, Query } from "appwrite";
import { apprwriteid, apiKey, collection_instagram_data, database, url } from "./config";

class Service {
    client = new Client();
    account;
    databases;
    adminClient;

    constructor() {
        this.client.setEndpoint(url).setProject(apprwriteid);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
    }

    async registerUser({ name, email, password }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
            if (user) {
                return this.loginUser(email, password)
            }
            return null
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    }
    async loginUser(email, password) {
        try {
            const user = await this.account.createEmailPasswordSession(email, password);
            if (user)
                return user
            else
                return null
        } catch (error) {
            return null
        }
    }

    async createInstagram(userId, instaId, followerscount, postscount) {
        try {
            const response = await this.databases.createDocument(
                database, // Replace with your database ID
                collection_instagram_data, // Replace with your collection ID
                ID.unique(), // Generate a unique document ID
                {
                    userId,
                    instaId,
                    ["followers-count"]: followerscount,
                    ["posts-count"]: postscount

                }
            );
        } catch (error) {
            throw new Error(error)
        }
    }
    async getInstaData(userId) {
        try {
            const response = await this.databases.listDocuments(
                database, // Replace with your database ID
                collection_instagram_data,
                [
                    Query.equal('userId', userId)

                ]
            );
            if (response.documents.length == 0)
                throw new Error("No records")
            return response.documents
        } catch (err) {
            throw new Error(err)
        }
    };


}

const service = new Service();
export default service;
