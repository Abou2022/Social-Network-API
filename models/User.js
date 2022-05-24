const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique:true,
      required: true,
      validate: {
        validator: function (v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
    }
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
   
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtua('friendCount').get(function(){
  return this.friends.length;
})
const User = model('Usert', userSchema);

module.exports = User;
