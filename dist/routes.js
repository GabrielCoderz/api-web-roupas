"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
// import { AuthUserController } from './controllers/user/AuthUserController';
// import { DetailUserController } from './controllers/user/DetailUserController';
// import { UpdateUserController } from './controllers/user/UpdateUserController';
// import { CreateHaircutController } from './controllers/haircut/CreateHaircutController';
// import { ListHaircutController } from './controllers/haircut/ListHaircutController';
// import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController';
// import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionService';
// import { CountHaircutController } from './controllers/haircut/CountHaircutController';
// import { DetailHaircutController } from './controllers/haircut/DetailHaircutController';
// import { NewScheduleController } from './controllers/schedule/NewScheduleController';
// import { ListScheduleController } from './controllers/schedule/ListScheduleController';
// import { FinishScheduleController } from './controllers/schedule/FinishScheduleController';
// import { SubscribeController } from './controllers/subscription/SubscriptionController';
// import { isAuthenticated } from './middlewares/isAuthenticated';
const router = (0, express_1.Router)();
exports.router = router;
// --- User router ---
router.post('/users', new CreateUserController_1.CreateUserController().handle);
//# sourceMappingURL=routes.js.map