require('dotenv').config();

const { connectDB, closeDB } = require('../app/lib/infrastructure/config/db');
const User = require('../app/lib/infrastructure/repositories/orm/mongoose/UserSchema')
const { app } = require('../app/lib/infrastructure/webserver/server'); 
const request = require('supertest');

describe('User API Tests', () => {
    beforeAll(async () => {
        await connectDB(true);
    });

    afterEach(async () => {
        await User.deleteMany(); 
    });

    afterAll(async () => {
        await closeDB();
    });

    it('should create a new user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({
                name: 'mr.test',
                email: 'test1@gmail.com',
                password: '1010101010',
                role: 'admin'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('name', 'mr.test');
        expect(response.body.email).toBe('test1@gmail.com');
    });

    it('should get all users', async () => {
        await User.create({
            name: 'test2',
            email: 'test2@gmail.com',
            password: '1010101010',
            role: 'user'
        });

        const response = await request(app).get('/api/users');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('_id');
        expect(response.body[0]).toHaveProperty('name', 'test2');
    });
});
