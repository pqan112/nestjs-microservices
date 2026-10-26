import { MONGO_DB } from '@common/configuration/mongo.config'
import { COLLECTIONS } from '@common/constants/enum/mongo-collection.enum'
import { ROLE } from '@common/constants/enum/role.enum'
import { Role } from '@common/schemas/role.schema'
import { Inject, Injectable } from '@nestjs/common'
import { Collection, Db, ObjectId, WithId } from 'mongodb'

@Injectable()
export class RoleRepo {
  private readonly roles: Collection<Role>

  constructor(@Inject(MONGO_DB) db: Db) {
    this.roles = db.collection<Role>(COLLECTIONS.ROLE)
  }

  findAll(): Promise<WithId<Role>[]> {
    return this.roles.find().toArray()
  }

  findById(id: string): Promise<WithId<Role> | null> {
    return this.roles.findOne({ _id: new ObjectId(id) })
  }

  findByName(name: ROLE): Promise<WithId<Role> | null> {
    return this.roles.findOne({ name })
  }
}
