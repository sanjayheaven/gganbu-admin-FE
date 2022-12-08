import { Spin } from "antd"
import { Suspense } from "react"
import ErrorBoundary from "../pages/ErrorBoundary"

function Fallback() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center min-h-full">
        <Spin></Spin>
      </div>
    </>
  )
}
export const SuspenseWrapper = (LazyComponent: React.LazyExoticComponent<() => JSX.Element>) => {
  function ErrorWrapper() {
    return (
      <>
        <ErrorBoundary>
          <Suspense fallback={<Fallback />}>{<LazyComponent />}</Suspense>
        </ErrorBoundary>
      </>
    )
  }
  return ErrorWrapper
}
