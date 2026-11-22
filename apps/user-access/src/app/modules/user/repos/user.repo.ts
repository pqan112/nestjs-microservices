import { Inject, Injectable } from '@nestjs/common'
import { Collection, Db, ObjectId, WithId } from 'mongodb'
import { MONGO_DB } from '@common/configuration/mongo.config'
import { COLLECTIONS } from '@common/constants/enum/mongo-collection.enum'
import { newDocument } from '@common/schemas/base.schema'
import { CreateUser, User } from '@common/schemas/user.schema'
import { UserTcpResponse } from '@common/interfaces/tcp/user'

@Injectable()
export class UserRepo {
  private readonly users: Collection<User>

  constructor(@Inject(MONGO_DB) db: Db) {
    this.users = db.collection<User>(COLLECTIONS.USER)
  }

  async create(data: CreateUser): Promise<WithId<User>> {
    const user = newDocument(data)
    const { insertedId } = await this.users.insertOne(user)
    return { _id: insertedId, ...user }
  }

  findById(id: string): Promise<WithId<User> | null> {
    return this.users.findOne({ _id: new ObjectId(id) })
  }

  async findByUserIdWithRoles(userId: string): Promise<UserTcpResponse | null> {
    const [user] = await this.users
      .aggregate<UserTcpResponse>([
        { $match: { userId } },
        {
          $lookup: {
            from: COLLECTIONS.ROLE,
            localField: 'roles',
            foreignField: '_id',
            as: 'roles',
          },
        },
      ])
      .toArray()
    return user ?? null
  }

  findByUserId(userId: string): Promise<WithId<User> | null> {
    return this.users.findOne({ userId })
  }

  findByEmail(email: string): Promise<WithId<User> | null> {
    return this.users.findOne({ email })
  }

  async exists(email: string): Promise<boolean> {
    return (await this.users.countDocuments({ email }, { limit: 1 })) > 0
  }
}
