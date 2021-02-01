import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
    displayName: {type: String, required: true, minlength: 4},
    icon: {type: String},
    discriminator: {type: String, required: true, length: 5},
    blocked_users: {type: Array},
    friend_requests: {type: Array},
    friends: {type: 
        [{
            id: String,
            displayName: String,
            discriminators: String
        }],
        required: false
    },
    created_at: {type: Date},
    edited_at: {type: [{
        edit: [[Object, Date] /*original*/, [Object, Date] /*edited*/]
      }], required: false}
});

const User = mongoose.model("User", userSchema);

export default User;