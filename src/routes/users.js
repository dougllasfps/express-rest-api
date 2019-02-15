module.exports = app => {
    app.route('/api/users')
        .post(app.controller.userController.post, app.controller.userController.validation)
}