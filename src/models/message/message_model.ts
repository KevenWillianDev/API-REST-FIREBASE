enum MessageTypes {
    text,
    image
}

interface messageModel {
    text: String,
    authorId: String,
    sendedAt: Date,
    type: MessageTypes,
    filePath: String,
}

export default messageModel;