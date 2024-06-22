const { UserModel } = require("../models/UserModel");
const { databaseConnect, databaseClose } = require("./database"); 

async function seedUsers() {
    
}

async function seedUsers() {
    let userData = [
        {
            username: "alex"
        },
        {
            username: "pikachu"
        }
    ]

    let result = await UserModel.insertMany(userData);
    console.log(result);
    return result;
}

async function seedBlogPosts() {

}

async function seed() {
    await databaseConnect();

    let newUsers = await seedUsers();
    let newBlogs = await seedBlogPosts(newUsers);
    
    console.log("Seeded data!");
    await databaseClose();
}

seed();