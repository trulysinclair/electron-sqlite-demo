import { PrismaClient } from '@prisma/client'
import { app } from 'electron'
import { join } from 'path'

const databaseFile = 'data.db'

// If packaged, grab the file from the app files. Otherwise, assume we're in development and just testing the locally copied file in the `out/` folder.
const databasePath = `file:${app.isPackaged ? join(app.getPath('userData'), databaseFile) : join(app.getAppPath(), 'out', databaseFile)}`

// Here we set the url dynamically, ignoring what's listed in the `schema.prisma` file.
export const database = new PrismaClient({ datasourceUrl: databasePath })
