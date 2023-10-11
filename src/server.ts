import mongoose from 'mongoose'
import app from './app'
import config from './config'
//port

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`Server connected on port ${config.port}`)
    })
    await mongoose.connect(config.db_url as string)
    console.log('Database connected')
  } catch (err) {
    console.log('failed to connect database')
  }
}

main()
