import { useApiProvider } from '@common'
import { ApiHooks } from '@common/types/api'

export const useHook = (fn: (apihooks: ApiHooks) => any) => {
  const { hooks } = useApiProvider()
  return fn(hooks)
}
