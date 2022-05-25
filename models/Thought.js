const { Schema, model, Types } = require('mongoose');
// const assignmentSchema = require('./Assignment');
// const dateFormat = require('../utils/dateFormat')
const moment = require("moment");


const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Type.ObjectId()
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength:280,
    },
    username: {
      type: String,
      required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: createdAtVal => dateFormat(createdAtVal)
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => {
        return moment(createdAtVal).format("YYYY-MM-DD hh:mm a");
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Schema to create Student model
const ThoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: createdAtVal => dateFormat(createdAtVal)
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => {
        return moment(createdAtVal).format("YYYY-MM-DD hh:mm a");
      },
    },
    username: {
        type: String,
        required:true,
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);





const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;
