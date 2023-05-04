const mongoose = require('mongoose')
const connectingdp = async () => {
    try {
        const connecting = await mongoose.connect(process.env.MONGOOSE_URL)
        console.log(`${connecting.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectingdp