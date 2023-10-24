import {Schema, model} from 'mongoose';
import { Icomments } from '../types/types';

const CommentSchema = new Schema({
    msg: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    },
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        default: null
    }],
    comment_parent_id: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        default: null
    }
});

CommentSchema.methods.toJSON = function () {
    const { post_id, __v, ...comment } = this.toObject();
    return comment
}

export default model<Icomments>('Comment', CommentSchema);