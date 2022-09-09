import { Column } from 'typeorm'
import { ASSET_STATUSES } from '@/models'

export class MuxVideo {
  @Column({ type: 'text', nullable: true })
  video_asset_id: string

  @Column({ type: 'text', nullable: true })
  video_playback_id: string
}
