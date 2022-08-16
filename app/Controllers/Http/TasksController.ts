import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from "@ioc:Adonis/Core/View";
import Task from "App/Models/Task";

export default class TasksController {

    public async index({ }: HttpContextContract) {

        const tasks = await Task.all()
        return View.render('index', { tasks })
    }

    public async show({ params }: HttpContextContract) {

        const task = await Task.findOrFail(params.id)
        return View.render('show', { task })
    }


    public async create({ }: HttpContextContract) {
        return View.render('create')
    }

    public async store({ request, response }: HttpContextContract) {
        const task = new Task()
        task.title = request.input('title')
        task.description = request.input('description')
        await task.save()
        return response.redirect('/')
    }

    public async update({ params, request, response }: HttpContextContract) {
        const task = await Task.findOrFail(params.id)
        await task
            .merge({
                title: request.input('title'),
                description: request.input('description')
            })
            .save()
        return response.redirect('/')
    }

    public async delete({ params, response }: HttpContextContract) {
        const task = await Task.findOrFail(params.id)
        await task.delete()

        return response.redirect('/')
    }
}
