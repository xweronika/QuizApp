const { check, validationResult } = require('express-validator');

exports.validator = async (req, res, next) => {

    // Category
    await check('category', 'Category is required.').notEmpty().run(req);
    await check('category')
        .isLength({ min: 2, max: 25 })
        .withMessage('Category must contain from 2 to 25 characters.').run(req)

    // Description
    await check('description', 'Description is required.').notEmpty().run(req);
    await check('description')
        .isLength({ min: 10, max: 120 })
        .withMessage('Description must contain from 10 to 120 characters.').run(req)

    // Questions array
    await check('details', "Minimum one question with answers is required.")
    await check('details')
        .isArray({ min: 1, max: 20 })
        .withMessage('Minimum one question with answers is required, maximum 20.').run(req)

    // Question
    await check('details.*.question', "Question is required.")
    await check('details.*.question')
        .isLength({ min: 10, max: 70 })
        .withMessage('Question must contain from 10 to 70 characters.').run(req)

    // Answers
    await check('details.*.answers', "Answers are required.")
    await check('details.*.answers')
        .isArray({ min: 4, max: 4 })
        .withMessage('Four answers are required.').run(req)

    // Correct answer
    await check('details.*.correct', "Correct answers is required.")
    await check('details.*.correct')
        .isNumeric({ min: 0, max: 3 })
        .withMessage('Correct answer must be the number of one of the answers.').run(req)


    if (!validationResult(req).isEmpty()) {
        const error = validationResult(req).errors[0];
        return res.status(400).json({msg: error.msg});
    }
    next();
};