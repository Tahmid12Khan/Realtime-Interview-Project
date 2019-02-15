module.exports = (app) => {
    const users = require('../controller/user.controller');
    const problems = require('../controller/problem.controller');
    const rooms = require('../controller/room.controller');

    app.post('/users', users.create);
    app.get('/users', users.findAll);
    app.get('/users/:userName', users.findOne);
    app.post('/admin/home', users.login);
    app.get('/logout', users.logout);
    app.get('/admin/home', users.renderAdminHome);

    app.put('/users/:userName/rooms', users.addRoomToUser);
    app.get('/users/:userName/rooms', users.getAllRoomsByUser);

    app.get('/problems', problems.findAllProblem);
    app.post('/admin/:userName/problems', problems.createProblem);
    app.get('/admin/:userName/problems/:problemId', problems.getProblem);
    app.put('/admin/:userName/problems/:problemId', problems.editProblem);

    app.post('/admin/:userName/rooms', rooms.createRoom);
    app.get('/admin/:userName/rooms', rooms.showAllRooms);
    app.get('/room', rooms.goToRoom);
    app.post('/submission', rooms.getResult);
    app.get('/room/:id/messages', rooms.getAllMessages);

    app.put('/room/:id', rooms.addUserToRoom);
    app.get('/room/:id/users', rooms.getUsersFromRoom);
    app.post('/room/:id/submissions', rooms.addSubmission);
    app.get('/room/:id/submissions', rooms.getSubmissions);


    // app.put('/room/:id', rooms.addCandidate);
    // app.get('room/:id', rooms.getRoom);

    app.get('/', (req, res) => {
        res.render("login");
    });

    app.get('/register', (req, res) => {
        res.render("register");
    });

}