import mongoose from "mongoose";


async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('database connected successfully');
    } catch (error) {
        console.log('failed to connect database ',error);
    }


}
bootstrap().catch(err => console.log(err));