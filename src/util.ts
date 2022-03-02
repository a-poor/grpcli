import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

export async function loadProto(filename: string) { // : Promise<grpc.GrpcObject> {
//   const packageDefinition = await protoLoader.load(filename)
//   return grpc.loadPackageDefinition(packageDefinition)
  return await protoLoader.load(filename)
}

export enum ProtoDefType {
    SERVICE = 0,
    MESSAGE,
    ENUM,
}

export function getServiceType(service: protoLoader.ProtobufTypeDefinition): ProtoDefType {
    if ('format' in service && service.format === 'Protocol Buffer 3 DescriptorProto')
        return ProtoDefType.MESSAGE
    if ('format' in service && service.format === 'Protocol Buffer 3 EnumDescriptorProto')
        return ProtoDefType.ENUM
    return ProtoDefType.SERVICE
}
