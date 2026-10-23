import { Outlet } from 'react-router-dom'
import { WixFooter } from '@/components/wix-footer'
import { WixHeader } from '@/components/wix-header'

export function WixLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <WixHeader />
      <Outlet />
      <WixFooter />
    </div>
  )
}
