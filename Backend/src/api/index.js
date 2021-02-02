import { Router } from 'express'

import admin from './Admin'

import company from './Company'

import employee from './Employee'


const router = new Router();

router.use('/admin', admin)

router.use('/company', company)

router.use('/employee', employee)

export default router