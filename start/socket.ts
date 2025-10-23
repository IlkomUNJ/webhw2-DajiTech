import Ws from '@ioc:Adonis/Addons/Ws'

const io = Ws.io()

io.on('connection', (socket) => {
  console.log('Client connected', socket.id)

  socket.on('joinRoom', (room) => {
    socket.join(room)
  })

  socket.on('newOrder', (orderData) => {
    io.in('sellerRoom').emit('orderNotification', orderData)
  })
})

export default io
