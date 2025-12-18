const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const { users,todos } = require('../../models')
const { ApiResponse, ApiError } = require('../libs/class.lib')
const { hashPassword, comparePassword } = require('../utils/bcrypt.utils')
const { accessTokenCreate } = require('../libs/token.lib')
const dummy = require('../utils/dummydata.utils')
const Create = asyncHandler(async (req, res, next) => {

    const { email, password, firstName, lastName } = req.body

    const hashPasswordBcrypt = await hashPassword(password,)

    const createEntries = await users.create({
        email,
        password: hashPasswordBcrypt,
        firstName,
        lastName
    })

    const createTodos = await todos.bulkCreate(dummy.map((todo) => {
        return {
            ...todo,
            userId: createEntries.dataValues.id,
            id:undefined
        }
    }))

    const token = accessTokenCreate({ id: createEntries.dataValues.id })

    return res.status(200).json(new ApiResponse(200, { user: { accesssToken: token } }, 'User created successfully'))

})

const Login = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body

    const find = await users.findOne({
        where: {
            email,
        },
        attributes: { exclude: ['deletedAt', 'updatedAt', ] }
    })

    if (!find) {
        return res.status(400).json(new ApiResponse(400, null, 'User not found'))
    }

    const comparingPass = await comparePassword(password, find.password)

    if (!comparingPass) {
        return res.status(400).json(new ApiResponse(400, null, 'Password not match'))
    }

    const token = accessTokenCreate({ id: find.id })

    return res.status(200).json(new ApiResponse(200, {
        user: {
            accesssToken: token
        }
    }, 'Login successfully'))


})


module.exports = {
    Login,
    Create
}