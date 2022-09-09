import { Logger } from '@/middleware'

export default () => null

export async function getServerSideProps(ctx) {
  Logger.info(`${ctx.req.method} ${ctx.req.url}`)
  return {
    redirect: {
      destination: `/games/stg/active`,
      permanent: false,
    },
  }
}
