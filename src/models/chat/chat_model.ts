import messageModel from "../message/message_model";

const messagesArray: Array<messageModel> = [];

const chatModel = {
    updateAt: Date,
    messages: messagesArray,
    userId: String,
    contactId: Number,
}

export default chatModel;