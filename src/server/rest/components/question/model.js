import moongose from 'mongoose';
import Joi from '@hapi/joi';

const Schema = moongose.Schema;

const Question = new Schema({
  question: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 255,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

/**
 * Validate the data sent to create a question.
 * @param {Object} question
 * @returns {Promise} Promise-like object that
 * can be used as a promise, or as a simple object.
 *
 * To learn more you can head to:
 * https://github.com/hapijs/joi/blob/v13.1.2/API.md#validatevalue-schema-options-callback
 */
export function validateQuestion(question) {
  const schema = Joi.object({
    name: Joi.string()
      .min(4)
      .max(255)
      .required(),
  });

  return schema.validate(question);
}

export default moongose.model('question', Question);
