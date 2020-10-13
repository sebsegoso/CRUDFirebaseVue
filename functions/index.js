const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express')
const cors = require('cors');

const router = express();

router.use(cors({ origin: true }))

router.get('/usuarios', async (req, res) => {
    const usuarios = await admin
        .firestore()
        .collection('usuarios')
        .get()
    let userList = []
    usuarios.docs.forEach(doc => {
        userList.push({ id: doc.id, data: doc.data() })
    })
    res.send(userList)
})

router.post('/usuario', async (req, res) => {
    const usuario = await admin
    .firestore()
    .collection('usuarios')
    .add(req.body)
    res.send(usuario)
})

router.put('/usuario/:id', async (req, res) => {
    const usuario = await admin
    .firestore()
    .collection('usuarios')
    .doc(req.params.id)
    .update(req.body)
    res.send(usuario)
})

router.delete( '/usuario/:id' , async (req, res) => {
    const usuario = await admin
    .firestore()
    .collection('usuarios')
    .doc(req.params.id)
    .delete()
    res.send(usuario)
})

exports.usuarios = functions.https.onRequest(router)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
