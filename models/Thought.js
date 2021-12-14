const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
 {
  thoughtText: {
   type: String,
   required: true,
   minlength: 1,
   maxlength: 280
  },
  createdAt: {
   type: Date,
   default: Date.now,
   get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reactions'
    } 
  ]
 }
);

// get total count of reactions
ThoughtSchema.reactions.virtuals('reactionCount').get(function() {
  return this.reactions.length;
});

// create the Thought model using the ThoughSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;