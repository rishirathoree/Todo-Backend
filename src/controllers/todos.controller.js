const expressAsyncHandler = require("express-async-handler");
const { ApiResponse } = require("../libs/class.lib");
const { todos } = require("../../models");

const Create = expressAsyncHandler(async (req, res,) => {
    const { title, description, notes, status = false, dueDate = null } = req.body
    const userId = req.id
    const createtodo = await todos.create({
        title,
        userId,
        dueDate,
        status,
        description,
        notes,
    })
    return res.status(200).json(new ApiResponse(200, { todo: createtodo }, 'Created todo successfully'))
})

const getEvery = expressAsyncHandler(async (req, res,) => {
    const userId = req.id
    const gettodo = await todos.findAll({
        where: {
            userId
        }
    })
    return res.status(200).json(new ApiResponse(200, { todo: gettodo }, 'Get todo successfully'))
})

const deleteTodo = expressAsyncHandler(async (req, res,) => {
    const { id } = req.params
    const userId = req.id
    await todos.destroy({
        where: {
            id,
            userId
        }
    })
    return res.status(200).json(new ApiResponse(200, { todo: id }, 'Deleted todo successfully'))
})

module.exports = {
    Create,
    deleteTodo,
    getEvery,
}
