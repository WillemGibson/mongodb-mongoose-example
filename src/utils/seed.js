const { BlogModel } = require("../models/BlogModel");
const { UserModel } = require("../models/UserModel");
const { databaseConnect, databaseClose } = require("./database"); 

async function seedUsers() {
    let blogData = [
        {
            title: "Super Cool Blog Post",
            content: "Pretend this is 300 words.",
            author: usersToUse[0].id,
            headerImage: "https://placehold.com/600x400/EEE/31343C",
            tags: ["seeded", "blog", "pokemon", "cool beans"],
            categories: ["coding", "travel"]
        },
        {
            title: "Another Cool Blog Post",
            content: "Pretend this is 300 words.",
            author: usersToUse[1].id,
            headerImage: "https://placehold.com/600x400/EEE/31343C",
            tags: ["seeded", "tada!", "pokemon", "food"],
            categories: ["photography", "life"]
        },
        {
            title: "The Third Cool Blog Post",
            content: "Pretend this is 300 words.",
            author: usersToUse[1].id,
            headerImage: "https://placehold.com/600x400/EEE/31343C",
            tags: ["seeded", "tada!", "pokemon", "food"],
            categories: ["photography", "life"]
        }
    ]

    let result = await BlogModel.insertMany(blogData);
    console.log(result);
    return result;
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