import {Command, Flags} from '@oclif/core'
import * as protoLoader from '@grpc/proto-loader'
import * as path from 'path'
import * as fs from 'fs'
import * as util from '../util'

async function fileExists(path: string): Promise<boolean> {
  return await new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err == null) resolve(true)
      if (err?.code == "ENOENT") resolve(false)
      reject(err)
    })
  })
}

export default class Desc extends Command {
  static description = 'Describe a protobuf file'

  static examples = [
  //     `$ oex hello friend --from oclif
  // hello friend from oclif! (./src/commands/hello/index.ts)
  // `,
  ]

  static flags = {
    // from: Flags.string({
    //   char: 'f', 
    //   description: 'Whom is saying hello', 
    //   required: true
    // }),
  }

  static args = [
    {
      name: 'PROTO_FILE', 
      description: 'Path to the protobuf file to parse.', 
      required: true
    },
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Desc)
    const { PROTO_FILE } = args
    if (!await fileExists(PROTO_FILE)) {
      this.error(`File ${PROTO_FILE} does not exist.`)
    }

    const proto = await util.loadProto("demo.proto")
    console.log(proto)

    for (const [k, v] of Object.entries(proto)) {
        console.log(`${k}: ${util.getServiceType(v as protoLoader.ProtobufTypeDefinition)}`)
    }
  }
}
