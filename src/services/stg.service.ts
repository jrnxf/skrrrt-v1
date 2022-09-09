import { STG_STATUSES } from '@/models/enums/stg-statuses.enum'
import { Stg } from '@/models/stg'
import { MINIMUM_NUMBER_OF_RIDERS_STG } from '@/utils'
import { getRepository } from 'typeorm'
import { SendService } from './send.service'

export class StgService {
  async getAll(): Promise<Stg[]> {
    return await getRepository<Stg>('Stg').find({
      relations: [
        'results',
        'results.player',
        'sets',
        'sets.set_by',
        'sets',
        'submissions',
        'submissions',
      ],
    })
  }

  static async rotate() {
    console.log(`STARTING STG ROTATION`, StgService.name)

    const repo = await getRepository<Stg>('Stg')

    const previousStgs = await repo.find({ status: STG_STATUSES.PREVIOUS })

    console.log(`FOUND ${previousStgs.length} PREVIOUS STGS`, StgService.name)
    if (previousStgs.length > 0) {
      for (let stg of previousStgs) {
        stg.status = STG_STATUSES.ARCHIVED
        stg.updated_at = new Date()
        await repo.save(stg)
        console.log(`TRANSITIONED PREVIOUS STG ${stg.id} TO ARCHIVED`, StgService.name)
      }
    }

    const activeStgs = await repo.find({ status: STG_STATUSES.ACTIVE })

    console.log(`FOUND ${activeStgs.length} ACTIVE STGS`, StgService.name)
    if (activeStgs.length > 0) {
      for (let stg of activeStgs) {
        stg.status = STG_STATUSES.PREVIOUS
        stg.updated_at = new Date()
        await repo.save(stg)
        console.log(`TRANSITIONED ACTIVE STG ${stg.id} TO PREVIOUS`, StgService.name)
      }
    }

    const upcomingStg = await repo.findOne({
      where: {
        status: STG_STATUSES.UPCOMING,
      },
      relations: ['sets', 'sets.set_by'],
    })

    console.log('upcoming stg', upcomingStg?.id)

    let createUpcomingStg = false
    if (upcomingStg) {
      const numberOfRiders = upcomingStg?.sets?.length || 0

      if (numberOfRiders < MINIMUM_NUMBER_OF_RIDERS_STG) {
        console.log(
          `UPCOMING STG HAD ${numberOfRiders} REGISTRANTS AND WAS NOT TRANSITIONED`,
          StgService.name,
        )
      } else {
        upcomingStg.status = STG_STATUSES.ACTIVE
        await repo.save(upcomingStg)
        console.log(
          `UPCOMING STG HAD ${numberOfRiders} REGISTRANTS AND WAS TRANSITIONED TO ACTIVE`,
          StgService.name,
        )
        createUpcomingStg = true
      }
    } else {
      createUpcomingStg = true
    }

    if (createUpcomingStg) {
      // there are no upcoming stgs
      await repo.insert({
        status: STG_STATUSES.UPCOMING,
        created_at: new Date(),
        updated_at: new Date(),
        sets: [],
        submissions: [],
      })
      console.log(`CREATED UPCOMING STG`, StgService.name)
    }
  }

  async sendTrickListEmails() {
    const repo = await getRepository<Stg>('Stg')
    const activeStgs = await repo.find({
      status: STG_STATUSES.ACTIVE,
    })

    for (let activeStg of activeStgs) {
      if (activeStg) {
        const html = `
        <div>
          <h1>The stg has started! 🤘😎🤘</h1>
          <p>These are all the tricks you need to land. The more tricks you land, the better. In the event of a tie, the last sumission time of each rider will be compared. The rider with the earliest last submission will win.
          <ul>
          ${activeStg?.sets?.map(
            (set) => `<li>${set?.instructions} - ${set?.set_by?.full_name}</li>`,
          )}
          </ul>
        </div>`

        const emailBatch = activeStg?.sets?.map((set) =>
          SendService.sendEmail(set?.set_by?.email, 'skrrrt - trick list 🤙🏼', html),
        )

        return await Promise.all(emailBatch)
      }
    }
  }
}
