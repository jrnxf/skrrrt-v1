import Link from 'next/link'
import { useRouter } from 'next/router'

export const ActiveLink = ({ children, ...props }) => {
  let className = props.className || ''
  const router = useRouter()
  if (router.pathname === props.href && props.activeClassName) {
    className += ` ${props.activeClassName}`
  }

  return (
    <div className={className}>
      <Link href={props.href} passHref>
        <div className="flex">{children}</div>
      </Link>
    </div>
  )
}
