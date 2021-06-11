const mongoose=require("mongoose")


const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://itidel:09451809KI@newcluster.3ve7s.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("data base connected");
  } catch (error) {
    console.log({ message: "data bas connot connect", error });
  }
};
module.exports = connectDB;