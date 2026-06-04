import mongoose from "mongoose";

const connectDb = async () => {
    try {
        // console.log("Mongo URL:", process.env.MONGODB_URL);

        await mongoose.connect(process.env.MONGODB_URL);

        console.log("DataBase Connected");
    } catch (error) {
        console.error("Database Error:");
        console.error(error);
    }
};

export default connectDb;

// import mongoose from "mongoose";

// const connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL)
//         console.log("DataBase Connected")
//     } catch (error) {
//         console.log(`DataBase Error ${error}`)
//     }
// }

// export default connectDb