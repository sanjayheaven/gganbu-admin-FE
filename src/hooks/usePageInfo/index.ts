import useData from "../useData"
import useFilter from "../useFilter"
import useLoading from "../useLoading"
import usePagination, { TablePaginationConfig } from "../usePagination"

interface IUsePageInfoProps<T, U> {
  initPagination?: TablePaginationConfig
  initFilter?: T
  initData?: U
}

export default function usePageInfo<T extends object, U extends object[]>({
  initPagination,
  initData,
  initFilter,
}: IUsePageInfoProps<T, U>) {
  const { loading, setLoading } = useLoading(false)
  const { filter, setFilter } = useFilter<typeof initFilter>(initFilter)
  const { data, setData } = useData<typeof initData>(initData)
  const { pagination, setPagination } = usePagination(initPagination)

  return {
    loading,
    setLoading,
    filter,
    setFilter,
    pagination,
    setPagination,
    data,
    setData,
  }
}
