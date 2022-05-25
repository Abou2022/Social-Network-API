const { Schema, model } = require('mongoose');

// const thoughtSchema = require("./Thought");
// const { isEmail } = require("validator");

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // email: {
    //   type: String,
    //   unique:true,
    //   required: true,
    //   validate: {
    //     validator: function (v) {
    //         return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
    //     },
    //     message: props => `${props.value} is not a valid email!`
    // }
    // },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return isEmail(value);
        },
      },
    },
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ],
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
   
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtual("friendCount").get(function(){
  return this.friends.length;
})
const User = model('Usert', userSchema);

module.exports = User;
