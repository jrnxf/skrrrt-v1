import { MediaService } from './media.service'
import { LoggerService } from './logger.service'

export class EventsService {
  static async processEvent(payload: any): Promise<boolean> {
    const eventType = payload?.trigger?.name

    console.log(`Processing event from Hasura`, EventsService.name, eventType)

    switch (eventType) {
      case 'post_deleted':
        if (payload.event.data.old.video_asset_id) {
          await MediaService.deleteMuxAsset(payload.event.data.old.video_asset_id)
        }
        if (payload.event.data.old.image_url) {
          const url = payload.event.data.old.image_url
          const s3Key = url.slice(url.indexOf('__media'))
          await MediaService.deleteObjectFromS3ByKey(s3Key)
        }
        return true
      case 'stg_set_deleted':
      case 'stg_submission_deleted':
        if (payload.event.data.old.video_asset_id) {
          await MediaService.deleteMuxAsset(payload.event.data.old.video_asset_id)
          LoggerService.log('Mux asset deleted', {
            assetId: payload.event.data.old.video_asset_id,
          })
        }
        return true
      default:
        console.log('No processing method for event type', EventsService.name, eventType)
        return true
    }
  }
}
