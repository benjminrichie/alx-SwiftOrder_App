import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://benjminrichie:MyKami001@cluster0.z2st5nl.mongodb.net/FoodDel').then(()=>console.log("DB Connected"));
}

// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://abayomirobertonawole3:dAuPCficn9f0booe@cluster0.a0toidj.mongodb.net/tomato-delivery-master').then(()=>console.log("DataBase Connected"));
//    // mongodb+srv://mattbelido:<password>@cluster0.9r6mwpy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    //mongodb+srv://abayomirobertonawole3:dAuPCficn9f0booe@cluster0.a0toidj.mongodb.net/tomato-delivery-master
    //mongodb+srv://kimrogers1004:professor1234@cluster0.kvddyvv.mongodb.net/tomato-delivery-master
//}



